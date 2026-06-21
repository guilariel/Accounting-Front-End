import type { ReactNode } from "react";

interface PProps {
    title: string;
    text: ReactNode;
}

export function P({ title, text }: PProps) {
    return (
        <p>
            <span className="font-semibold text-gray-700 rounded-xl p-4">
                {title}    
            </span>
            {text}
        </p>
    );
}