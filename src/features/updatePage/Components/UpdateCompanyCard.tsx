import { useState } from "react";
import { updateCompany } from "../../../api/CompanyApi";

export function UpdateCompanyCard() {
    const [companyName, setCompanyName] = useState<string>("");
    const [newName, setNewName] = useState<string>("");
    
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800"> Cambia tu compania</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la compania y su nuevo nombre para actualizarla.
            </p>
            <input type="text"
                placeholder="-Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
            <input type="text"
                placeholder="-New name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
            {companyName != "" ? (
                <button onClick={async () => {
                    await updateCompany({
                        name: companyName,
                        newName: newName
                    });
                    setCompanyName("");
                }}
                    className="mt-4 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                    Update
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">Los campos no pueden estar vacios</div>
            )}
        </div>
    );
}