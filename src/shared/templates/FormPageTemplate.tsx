import type { ReactNode } from 'react';

export function FormPageTemplate({ title, children }: { title: string; children?: ReactNode }) {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{title}</h1>
                <div className="form-content">
                    {children}
                </div>
            </div>
        </div>
    );
}