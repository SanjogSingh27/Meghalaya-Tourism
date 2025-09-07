import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db, appId } from '@/lib/firebase';
import { destinations, hotels } from '@/data/mockData';
import PaymentModal from '@/components/modals/PaymentModal';

export default function BookingPage({ user, showNotification }) {
    // --- THIS IS THE FIX ---
    // The initial state for the destination is now forced to lowercase to match the hotel object keys.
    const [selectedDestination, setSelectedDestination] = useState(destinations[0].name.toLowerCase());
    const [selectedHotel, setSelectedHotel] = useState(hotels[destinations[0].name.toLowerCase()][0].name);
    
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const [isFirstBooking, setIsFirstBooking] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        const checkFirstBooking = async () => {
            if (user) {
                const userDocRef = doc(db, `artifacts/${appId}/users/${user.uid}`);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists() && !userDocSnap.data().firstBookingDone) {
                    setIsFirstBooking(true);
                }
            }
        };
        checkFirstBooking();
    }, [user]);

    useEffect(() => {
        if (checkIn && checkOut) {
            const hotelInfo = hotels[selectedDestination]?.find(h => h.name === selectedHotel);
            if (!hotelInfo) {
                setTotalCost(0);
                return;
            };

            const startDate = new Date(checkIn);
            const endDate = new Date(checkOut);
            const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

            if (nights > 0) {
                let cost = nights * hotelInfo.price * guests;
                if (isFirstBooking) {
                    cost *= 0.9; // Apply 10% discount
                }
                setTotalCost(cost);
            } else {
                setTotalCost(0);
            }
        }
    }, [checkIn, checkOut, guests, selectedHotel, selectedDestination, isFirstBooking]);
    
    const handleDestinationChange = (e) => {
        const newDestination = e.target.value;
        setSelectedDestination(newDestination);

        const newDestinationHotels = hotels[newDestination];
        
        if (newDestinationHotels && newDestinationHotels.length > 0) {
            setSelectedHotel(newDestinationHotels[0].name);
        } else {
            setSelectedHotel(''); 
        }
    };

    const handleProceedToPayment = (e) => {
        e.preventDefault();
        if (!selectedHotel) {
            showNotification('No hotels available for the selected destination.', 'error');
            return;
        }
        if (!checkIn || !checkOut || totalCost <= 0) {
            showNotification('Please select valid check-in and check-out dates.', 'error');
            return;
        }
        
        const details = {
            userId: user.uid,
            destination: selectedDestination,
            hotel: selectedHotel,
            guests,
            checkIn,
            checkOut,
            totalCost,
            bookedAt: new Date(),
        };
        setBookingDetails(details);
        setPaymentModalOpen(true);
    };

    const handlePaymentSuccess = async () => {
        if (!bookingDetails) return;
        
        try {
            await addDoc(collection(db, `artifacts/${appId}/public/bookings`), bookingDetails);
            
            const userDocRef = doc(db, `artifacts/${appId}/users/${user.uid}`);
            await setDoc(userDocRef, { firstBookingDone: true }, { merge: true });

            const analyticsDocRef = doc(db, `artifacts/${appId}/public/analytics/${selectedDestination}`);
            const analyticsDocSnap = await getDoc(analyticsDocRef);
            const currentFootfalls = analyticsDocSnap.exists() ? analyticsDocSnap.data().footfalls : 0;
            await setDoc(analyticsDocRef, { footfalls: currentFootfalls + parseInt(guests, 10) }, { merge: true });

            showNotification('Booking successful! Your adventure awaits.', 'success');
            setPaymentModalOpen(false);
            setBookingDetails(null);
        } catch (error) {
            console.error("Booking failed:", error);
            showNotification('There was an error processing your booking. Please try again.', 'error');
        }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto p-8 bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Book Your Stay</h2>
                <form onSubmit={handleProceedToPayment} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Destination Selection */}
                    <div className="md:col-span-2">
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                        <select
                            id="destination"
                            value={selectedDestination}
                            onChange={handleDestinationChange}
                            className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"
                        >
                            {destinations.map(dest => (
                                <option key={dest.name} value={dest.name.toLowerCase()}>{dest.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Hotel Selection */}
                    <div>
                        <label htmlFor="hotel" className="block text-sm font-medium text-gray-300 mb-2">Hotel</label>
                        <select
                            id="hotel"
                            value={selectedHotel}
                            onChange={(e) => setSelectedHotel(e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"
                            disabled={!hotels[selectedDestination] || hotels[selectedDestination].length === 0}
                        >
                            {hotels[selectedDestination] && hotels[selectedDestination].length > 0 ? (
                                hotels[selectedDestination].map(hotel => (
                                    <option key={hotel.name} value={hotel.name}>{hotel.name} (₹{hotel.price.toLocaleString()}/night)</option>
                                ))
                            ) : (
                                <option value="">No hotels available</option>
                            )}
                        </select>
                    </div>

                    {/* Number of Guests */}
                    <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            min="1"
                            max="10"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"
                        />
                    </div>

                    {/* Check-in Date */}
                    <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-300 mb-2">Check-in</label>
                        <input
                            type="date"
                            id="check-in"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"
                        />
                    </div>

                    {/* Check-out Date */}
                    <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-300 mb-2">Check-out</label>
                        <input
                            type="date"
                            id="check-out"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"
                        />
                    </div>

                    {/* Total Cost Display */}
                    <div className="md:col-span-2 text-center mt-4 p-4 bg-gray-900/50 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-300">Total Estimated Cost</h3>
                        <p className="text-3xl font-bold text-green-400 mt-2">₹{totalCost.toLocaleString()}</p>
                        {isFirstBooking && totalCost > 0 && <p className="text-sm text-cyan-400 mt-1">10% first-timer discount applied!</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-800 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            disabled={!selectedHotel}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
            {isPaymentModalOpen && (
                <PaymentModal 
                    isOpen={isPaymentModalOpen} 
                    onClose={() => setPaymentModalOpen(false)}
                    onPaymentSuccess={handlePaymentSuccess}
                    bookingDetails={bookingDetails}
                />
            )}
        </>
    );
}

