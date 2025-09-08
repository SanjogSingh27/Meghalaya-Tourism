// This component displays a curated list of travel packages for Meghalaya.
import { travelPackages } from '@/data/mockData';
import { CheckCircle2, MapPin } from 'lucide-react';

// Helper to format currency
const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value);

export default function PackagesPage({ showNotification }) {
    
    // Placeholder function for booking a package
    const handleBookPackage = (packageName) => {
        // In a real app, this would open a booking form or payment modal.
        showNotification(`Booking inquiry for "${packageName}" has been sent! We will contact you shortly.`, 'success');
    };

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Curated Travel Packages
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Choose from our expertly crafted itineraries to experience the best of Meghalaya, hassle-free.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {travelPackages.map((pkg) => (
                    <div 
                        key={pkg.name}
                        className="group bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 overflow-hidden flex flex-col transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-400/20"
                    >
                        <div className="relative">
                            <img 
                                src={pkg.image} 
                                alt={pkg.name} 
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute top-0 right-0 bg-gray-900/70 text-white text-sm font-semibold px-4 py-2 rounded-bl-xl">
                                {pkg.duration}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-white">
                                {pkg.name}
                            </h3>
                            <p className="text-sm text-gray-400 mt-2 flex-grow">{pkg.description}</p>

                            <div className="my-4">
                                <h4 className="font-semibold text-gray-200 flex items-center"><MapPin className="w-4 h-4 mr-2 text-cyan-400"/>Highlights</h4>
                                <ul className="text-sm text-gray-400 mt-2 space-y-1">
                                    {pkg.highlights.map(highlight => <li key={highlight}>- {highlight}</li>)}
                                </ul>
                            </div>

                             <div className="my-4">
                                <h4 className="font-semibold text-gray-200 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-400"/>Benefits</h4>
                                <ul className="text-sm text-gray-400 mt-2 space-y-1">
                                     {pkg.benefits.map(benefit => <li key={benefit}>- {benefit}</li>)}
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-4 border-t border-gray-700">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-400">Starting from</p>
                                        <p className="text-2xl font-bold text-green-400">
                                            {formatCurrency(pkg.price)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleBookPackage(pkg.name)}
                                        className="py-2.5 px-6 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-800 transition-all duration-300"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
