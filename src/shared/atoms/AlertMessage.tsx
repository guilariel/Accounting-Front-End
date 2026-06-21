interface MessageProps {
    text: string;
}

export function AlertMessage({ text }: MessageProps) {
    return (
        <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
            {text}
        </div>
    );
}