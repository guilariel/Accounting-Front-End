interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function NavBarButton({ text, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:text-blue-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {text}
        </button>
    );
}