// This component displays a real, interactive map of Meghalaya using react-leaflet.
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet CSS

import { destinations } from '@/data/mockData';
import { X } from 'lucide-react';

// --- Custom Icon for Map Markers ---
const customMarkerIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981" width="32px" height="32px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><circle cx="12" cy="9" r="4" fill="white" opacity="0.3"/></svg>'),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// --- Sub-component for the Hero Image Slider ---
function HeroSlider() {
    const featuredDestinations = destinations.slice(0, 6);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % featuredDestinations.length);
        }, 5000);

        return () => clearInterval(sliderInterval);
    }, [featuredDestinations.length]);

    // This component now just returns the slides. The parent div provides the container.
    return (
        <>
            {featuredDestinations.map((dest, index) => (
                <div
                    key={dest.name}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={dest.images[0]}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight shadow-lg">
                            {dest.name}
                        </h2>
                    </div>
                </div>
            ))}
        </>
    );
}

// --- Location Detail Card (Modal) ---
function LocationCard({ destination, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!destination.images || destination.images.length === 0) return;
        const timer = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % destination.images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [destination.images]);

    if (!destination) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in">
            <div className="w-11/12 max-w-sm md:max-w-md bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 z-50 animate-fade-in-scale">
                 <div className="relative">
                    <div className="w-full h-56 overflow-hidden rounded-t-2xl">
                        {destination.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${destination.name} slideshow`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ))}
                    </div>
                     <button onClick={onClose} className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors z-30">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                    <p className="text-gray-300 mt-2">{destination.description}</p>
                </div>
            </div>
        </div>
    );
}

// --- Main Explore Page Component ---
export default function ExplorePage() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const mapCenter = [25.57, 91.88];
    const mapZoom = 9;

    return (
        <div className="animate-fade-in space-y-12">
            {/* 1. Hero Slider Section */}
            <div className="relative h-[50vh] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700">
                <HeroSlider />
            </div>

            {/* 2. Interactive Map Section Header */}
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Interactive Tourist Map
                </h2>
                <p className="mt-3 text-md text-gray-400 max-w-2xl mx-auto">
                    Click on a location pin to learn more and plan your visit.
                </p>
            </div>
            
            {/* 3. The Map Container */}
            <div className="h-[60vh] w-full max-w-5xl mx-auto rounded-2xl border-2 border-gray-700 overflow-hidden relative z-10">
                {isClient && (
                    <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} className="w-full h-full bg-gray-800 relative z-10">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />
                        {destinations.map(dest => (
                            <Marker 
                                key={dest.name} 
                                position={dest.coords} 
                                icon={customMarkerIcon}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedDestination(dest);
                                    },
                                }}
                            />
                        ))}
                    </MapContainer>
                )}
            </div>
            
            {/* The Pop-up Card Modal */}
            {selectedDestination && (
                <LocationCard 
                    destination={selectedDestination} 
                    onClose={() => setSelectedDestination(null)} 
                />
            )}
        </div>
    );
}

