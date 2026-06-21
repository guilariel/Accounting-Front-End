interface TextAreaProps{
    value: string;
    placeholder: string;
    onChange: (value: string) => void
    rows: number;
}

export function Textarea({value, placeholder, onChange, rows} : TextAreaProps) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}