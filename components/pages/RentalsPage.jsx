import { useState } from 'react';
import { vehicles } from '@/data/mockData';
import RentalPaymentModal from '@/components/modals/RentalPaymentModal';

export default function RentalsPage({ showNotification }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    // Function to open the modal and set the selected vehicle
    const handleRentClick = (vehicle) => {
        setSelectedVehicle(vehicle);
        setIsModalOpen(true);
    };

    // Function to close the modal and clear the selection
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVehicle(null);
    };

    // Function to handle the successful payment callback from the modal
    const handlePaymentSuccess = (vehicleName) => {
        setIsModalOpen(false);
        showNotification(`Successfully rented the ${vehicleName}! Enjoy your ride.`, 'success');
        setSelectedVehicle(null);
    };

    return (
        <>
            <div className="animate-fade-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Rent a Vehicle
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore Meghalaya at your own pace. Choose from our curated selection of cars and bikes.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vehicles.map((vehicle) => (
                        <div 
                            key={vehicle.name} 
                            className="group bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 overflow-hidden flex flex-col"
                        >
                            <div className="relative">
                                <img 
                                    src={vehicle.image} 
                                    alt={vehicle.name} 
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {vehicle.type}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white">
                                    {vehicle.name}
                                </h3>
                                <p className="text-2xl font-semibold text-green-400 mt-2">
                                    ₹{vehicle.price.toLocaleString()}<span className="text-sm text-gray-400">/day</span>
                                </p>
                                <div className="flex-grow"></div>
                                <button 
                                    onClick={() => handleRentClick(vehicle)}
                                    className="w-full mt-4 py-2.5 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-800 transition-all duration-300"
                                >
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the Rental Payment Modal */}
            <RentalPaymentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onPaymentSuccess={handlePaymentSuccess}
                vehicleDetails={selectedVehicle}
            />
        </>
    );
}

