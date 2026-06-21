interface LabelProps{
    text: string;
}

export function Label({text} : LabelProps) {
    return(
    <label className="block text-sm font-medium text-gray-700 mb-1">
        {text}
    </label>
    );
}