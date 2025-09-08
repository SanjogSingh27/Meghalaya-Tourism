// This file contains SVG icon components used throughout the application.
// Using the `export` keyword before each function makes it available for named imports elsewhere.

// A spinning SVG icon used to indicate loading states.
export function SpinnerIcon() {
    return (
        <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
}

// The Google "G" logo icon, used for the Google Sign-In button.
export function GoogleIcon() {
    return (
        <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 110.1 512 0 398.8 0 256S110.1 0 244 0c69.8 0 131.3 27.8 174.9 73.1l-63.1 61.9C324.9 100.3 287.4 80 244 80 149.3 80 72.8 155.8 72.8 256s76.5 176 171.2 176c99.7 0 142.1-74.8 147.4-111.4H244V261.8h244z"></path>
        </svg>
    );
}

// --- NEW ---
// A generic QR code icon for the payment modal.
export function QrCodeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
            <rect width="5" height="5" x="3" y="3" rx="1" />
            <rect width="5" height="5" x="16" y="3" rx="1" />
            <rect width="5" height="5" x="3" y="16" rx="1" />
            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
            <path d="M21 21v.01" />
            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
            <path d="M3 12h.01" />
            <path d="M12 3h.01" />
            <path d="M12 16h.01" />
            <path d="M16 12h.01" />
            <path d="M21 12h.01" />
            <path d="M12 21h.01" />
        </svg>
    );
}

