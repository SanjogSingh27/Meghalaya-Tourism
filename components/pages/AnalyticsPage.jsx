// This component displays a comprehensive analytics dashboard.
// It uses the heavy mock data to generate insightful charts and metrics.
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { historicalBookings } from '@/data/mockData';

// Helper to format currency for Indian Rupees
const formatCurrency = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value);

// Helper to capitalize words for display
const capitalize = (str) => str.replace(/\b\w/g, char => char.toUpperCase());

export default function AnalyticsPage() {

    // useMemo processes the data only when historicalBookings changes, improving performance.
    const analyticsData = useMemo(() => {
        if (!historicalBookings || historicalBookings.length === 0) {
            return {
                totalRevenue: 0,
                totalBookings: 0,
                averageGuests: 0,
                revenueByDestination: [],
                bookingTrends: [],
            };
        }

        const totalRevenue = historicalBookings.reduce((acc, booking) => acc + booking.totalCost, 0);
        const totalBookings = historicalBookings.length;
        const totalGuests = historicalBookings.reduce((acc, booking) => acc + booking.guests, 0);
        const averageGuests = (totalGuests / totalBookings).toFixed(1);

        // Process revenue by destination for the Bar Chart
        const revenueByDest = historicalBookings.reduce((acc, booking) => {
            acc[booking.destination] = (acc[booking.destination] || 0) + booking.totalCost;
            return acc;
        }, {});
        const revenueByDestination = Object.entries(revenueByDest).map(([name, revenue]) => ({
            name: capitalize(name),
            revenue,
        })).sort((a, b) => b.revenue - a.revenue);

        // Process booking trends by month for the Line Chart
        const trends = historicalBookings.reduce((acc, booking) => {
            const monthKey = booking.bookedAt.toLocaleString('en-US', { month: 'short', year: '2-digit' });
            // Store the actual date for sorting purposes
            const monthDate = new Date(booking.bookedAt.getFullYear(), booking.bookedAt.getMonth(), 1);
            
            if (!acc[monthKey]) {
                acc[monthKey] = { bookings: 0, date: monthDate };
            }
            acc[monthKey].bookings += 1;
            return acc;
        }, {});

        // Map and sort the trends chronologically
        const bookingTrends = Object.entries(trends)
            .map(([month, data]) => ({ month, bookings: data.bookings, date: data.date }))
            .sort((a, b) => a.date - b.date);

        return { totalRevenue, totalBookings, averageGuests, revenueByDestination, bookingTrends };

    }, []);

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Tourism Analytics Dashboard
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Insights into booking trends, revenue, and tourist footfall across Meghalaya.
                </p>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-400">Total Revenue</h3>
                    <p className="text-4xl font-bold text-green-400 mt-2">{formatCurrency(analyticsData.totalRevenue)}</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-400">Total Bookings</h3>
                    <p className="text-4xl font-bold text-cyan-400 mt-2">{analyticsData.totalBookings}</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-400">Average Guests</h3>
                    <p className="text-4xl font-bold text-violet-400 mt-2">{analyticsData.averageGuests}</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue by Destination Bar Chart */}
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Revenue by Destination</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={analyticsData.revenueByDestination} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                            <XAxis dataKey="name" stroke="#a0aec0" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#a0aec0" fontSize={12} tickFormatter={(value) => `₹${value/1000}k`} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }}
                                labelStyle={{ color: '#e2e8f0' }}
                                formatter={(value) => [formatCurrency(value), 'Revenue']}
                            />
                            <Bar dataKey="revenue" fill="#34d399" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Booking Trends Line Chart */}
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Booking Trends (Last 12 Months)</h3>
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={analyticsData.bookingTrends} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                            <XAxis dataKey="month" stroke="#a0aec0" fontSize={12} />
                            <YAxis stroke="#a0aec0" fontSize={12} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }}
                                labelStyle={{ color: '#e2e8f0' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

