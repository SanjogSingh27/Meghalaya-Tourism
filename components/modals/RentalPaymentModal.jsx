import { useState, useMemo } from 'react';
import { SpinnerIcon } from '@/components/icons';

// Helper to format currency
const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value);

export default function RentalPaymentModal({ isOpen, onClose, onPaymentSuccess, vehicleDetails }) {
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [rentalDays, setRentalDays] = useState(1); // Default to 1 day

    // Generate a real QR code URL based on rental details
    const qrCodeUrl = useMemo(() => {
        if (!vehicleDetails || paymentMethod !== 'qr') return '';
        
        const totalCost = vehicleDetails.price * rentalDays;
        const upiData = {
            pa: 'meghalaya.tourism.rentals@okhdfcbank', // A different VPA for rentals
            pn: `Rental for ${vehicleDetails.name}`,
            am: totalCost.toFixed(2),
            cu: 'INR',
            tn: `Rental of ${vehicleDetails.name} for ${rentalDays} day(s)`
        };
        const upiString = `upi://pay?${new URLSearchParams(upiData).toString()}`;
        
        return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
    }, [vehicleDetails, paymentMethod, rentalDays]);


    if (!isOpen || !vehicleDetails) return null;

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onPaymentSuccess(vehicleDetails.name); // Pass vehicle name on success
        }, 2000);
    };

    const totalCost = vehicleDetails.price * rentalDays;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">Confirm Rental Payment</h2>
                        <p className="text-gray-400 mt-1">For <span className="font-semibold text-cyan-400">{vehicleDetails.name}</span></p>
                    </div>

                     {/* Days selection */}
                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                         <label htmlFor="rentalDays" className="text-sm font-medium text-gray-300">Rental Duration (Days)</label>
                         <input 
                            type="number" 
                            id="rentalDays"
                            value={rentalDays}
                            onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value, 10)))}
                            min="1"
                            className="w-20 bg-gray-700 text-white rounded-md border-gray-600 text-center focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <div className="flex bg-gray-900/50 rounded-lg p-1 border border-gray-700">
                        <button 
                            onClick={() => setPaymentMethod('card')}
                            className={`w-1/2 py-2.5 text-sm font-medium rounded-md transition-colors ${paymentMethod === 'card' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                        >
                            Pay with Card
                        </button>
                        <button 
                            onClick={() => setPaymentMethod('qr')}
                            className={`w-1/2 py-2.5 text-sm font-medium rounded-md transition-colors ${paymentMethod === 'qr' ? 'bg-green-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                        >
                            Scan QR Code
                        </button>
                    </div>
                    
                    <div>
                        {paymentMethod === 'card' ? (
                            <form onSubmit={handlePayment} className="space-y-4">
                                <div>
                                    <label htmlFor="cardNumRental" className="text-sm font-medium text-gray-300">Card Number</label>
                                    <input type="text" id="cardNumRental" placeholder="0000 0000 0000 0000" className="w-full mt-1 bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"/>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="expiryDateRental" className="text-sm font-medium text-gray-300">Expiry Date</label>
                                        <input type="text" id="expiryDateRental" placeholder="MM/YY" className="w-full mt-1 bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"/>
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="cvvRental" className="text-sm font-medium text-gray-300">CVV</label>
                                        <input type="text" id="cvvRental" placeholder="123" className="w-full mt-1 bg-gray-700 text-white rounded-lg border-gray-600 focus:ring-green-500 focus:border-green-500 py-3 px-4"/>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="text-center p-4 bg-white rounded-lg flex flex-col items-center justify-center">
                               {qrCodeUrl ? (
                                    <img src={qrCodeUrl} alt="Scan to pay for rental" width="200" height="200" />
                               ) : (
                                    <SpinnerIcon />
                               )}
                                <p className="mt-2 text-sm text-gray-700 font-medium">Scan this code with any UPI app to pay.</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-gray-300">Total Amount:</span>
                            <span className="font-bold text-green-400 text-2xl">{formatCurrency(totalCost)}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between space-x-4">
                         <button onClick={onClose} className="w-1/2 py-3 font-semibold text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                            Cancel
                        </button>
                        <button onClick={handlePayment} disabled={loading} className="w-1/2 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center disabled:bg-gray-500">
                            {loading ? <SpinnerIcon /> : 'Pay Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
