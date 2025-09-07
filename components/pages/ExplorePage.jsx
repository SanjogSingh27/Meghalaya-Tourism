import { useState, useEffect } from 'react';
import { destinations } from '@/data/mockData';

// A sub-component to handle the image slideshow logic for each card
function DestinationCard({ destination }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!destination.images || destination.images.length === 0) {
            return; 
        }

        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === destination.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3500);

        return () => clearInterval(timer);
    }, [destination.images]);

    return (
        // --- CHANGE: Added fixed width and flex-shrink-0 for horizontal layout ---
        <div 
            className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-700 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:-translate-y-1 w-80 md:w-96 flex-shrink-0"
        >
            <div className="w-full h-80">
                {destination.images && destination.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${destination.name} slideshow image ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                </h3>
                <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                </p>
            </div>
        </div>
    );
}

// The incorrect export line has been removed.
export default function ExplorePage() {
    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Explore the Abode of Clouds
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Discover the breathtaking landscapes and vibrant culture of Meghalaya's most iconic destinations.
                </p>
            </div>
            
            {/* --- CHANGE: Added classes to hide the scrollbar --- */}
            <div className="flex space-x-8 overflow-x-auto p-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.name} destination={destination} />
                ))}
            </div>
        </div>
    );
}

