interface InputProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
    return (
        <input
        placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />
    );
}