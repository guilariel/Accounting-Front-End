import { useState } from "react";
import { deleteBranch } from "../../../api/BranchApi";

export function DeleteBranchCard() {
    const [branchName, setBranchName] = useState<string>("");
    
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Elimina tu sucursal</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la sucursal para eliminarla.
            </p>
            <input type="text"
                placeholder="Nombre de la sucursal"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />

            {branchName != "" ? (
                <button onClick={async () => {
                    await deleteBranch(branchName);
                    setBranchName("");
                }}
                    className="mt-4 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                    Eliminar
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">No puede ser un nombre vacio</div>
            )}
        </div>
    );
}