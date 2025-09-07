import { vehicles } from '@/data/mockData';

export default function RentalsPage({ showNotification }) {
    return (
        <div className="container mx-auto animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Rent a Vehicle
                </h1>
                <p className="mt-4 text-lg text-gray-300">Explore Meghalaya at your own pace. Choose from our range of cars and bikes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {vehicles.map(v => (
                    <div key={v.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 group">
                        <img src={v.image} alt={v.name} className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${v.type === 'Car' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>{v.type}</span>
                            <h3 className="text-xl font-bold text-orange-400">{v.name}</h3>
                            <p className="mt-2 text-2xl font-bold text-white">₹{v.price.toLocaleString('en-IN')}<span className="text-sm font-normal text-gray-400">/day</span></p>
                            <button 
                                onClick={() => showNotification(`Rental request for ${v.name} sent!`, 'success')}
                                className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-500/20">
                                Rent Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

