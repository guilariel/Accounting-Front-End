interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
}

export function Checkbox({
    checked,
    label,
    onChange,
}: CheckboxProps) {
    return (
        <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            {label}
        </label>
    );
}