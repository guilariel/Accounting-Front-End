interface ButtonProps {
    text: string;
    onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="mt-4 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            {text}
        </button>
    );
}