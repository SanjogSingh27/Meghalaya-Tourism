export default function Notification({ message, type }) {
    const baseClasses = "fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white font-semibold transition-all duration-300";
    const typeClasses = {
        success: "bg-green-500",
        error: "bg-red-500"
    };
    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>
            {message}
        </div>
    );
}
