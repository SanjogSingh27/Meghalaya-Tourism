export default function Footer() {
    return (
        <footer className="bg-gray-900/50 text-gray-400 p-4 mt-auto">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; {new Date().getFullYear()} CloudCompass Meghalaya. All rights reserved.</p>
                <p className="mt-1">Experience the Scotland of the East.</p>
            </div>
        </footer>
    );
}

