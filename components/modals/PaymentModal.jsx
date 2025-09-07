import { useState } from 'react';
import { CreditCardIcon, XIcon } from '@/components/icons';

export default function PaymentModal({ isOpen, onClose, bookingDetails, onPaymentSuccess }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    
    // Mock card details state
    const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });

    if (!isOpen) return null;

    const handlePayment = async (e) => {
        e.preventDefault();
        // Basic validation
        if(!card.number || !card.name || !card.expiry || !card.cvv) {
            setError('Please fill in all card details.');
            return;
        }
        setError('');
        setIsProcessing(true);
        
        // Simulate payment processing delay
        setTimeout(() => {
            const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            onPaymentSuccess({
                paymentMethod: 'Card',
                transactionId,
                amount: bookingDetails.totalCost,
                status: 'completed'
            });
            setIsProcessing(false);
            onClose(); // Close modal on success
        }, 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCard(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-gray-800 text-white rounded-xl shadow-2xl w-full max-w-md m-4 p-8 transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-green-400">Complete Your Payment</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <XIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-6">
                    <p className="text-gray-400">Destination: <span className="font-semibold text-white">{bookingDetails.destination}</span></p>
                    <p className="text-gray-400">Hotel: <span className="font-semibold text-white">{bookingDetails.hotel}</span></p>
                    <p className="text-gray-400">Total Nights: <span className="font-semibold text-white">{bookingDetails.nights}</span></p>
                    <p className="text-2xl font-bold text-green-400 mt-2">Total Amount: ${bookingDetails.totalCost.toFixed(2)}</p>
                </div>
                
                <form onSubmit={handlePayment} className="space-y-4">
                    <div className="relative">
                        <input name="number" onChange={handleInputChange} type="text" placeholder="Card Number" className="w-full bg-gray-700 p-3 pl-12 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"/>
                        <CreditCardIcon className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                    </div>
                    <input name="name" onChange={handleInputChange} type="text" placeholder="Cardholder Name" className="w-full bg-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"/>
                    <div className="flex space-x-4">
                        <input name="expiry" onChange={handleInputChange} type="text" placeholder="MM/YY" className="w-1/2 bg-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"/>
                        <input name="cvv" onChange={handleInputChange} type="text" placeholder="CVV" className="w-1/2 bg-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"/>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    
                    <button type="submit" disabled={isProcessing} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 disabled:bg-gray-500">
                        {isProcessing ? 'Processing...' : `Pay $${bookingDetails.totalCost.toFixed(2)}`}
                    </button>
                </form>
            </div>
        </div>
    );
}
