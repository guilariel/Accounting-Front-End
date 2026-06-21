import { useState } from "react";
import { updateBranch } from "../../../api/BranchApi";

export function UpdateBranchCard() {
    const [branchName, setBranchName] = useState("");
    const [newName, setNewName] = useState<string>("");
    const [mainBranch, setMainBranch] = useState(false);

    const canCreate = branchName.trim() !== "" && newName.trim() !== "";

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Crea tu sucursal</h1>
            <p className="mt-1 text-sm text-slate-500">
                Completa el nombre de la sucursal y la empresa asociada.
            </p>

            <div className="mt-4 space-y-3 mt-8">
                <input
                    type="text"
                    placeholder="-Nombre de la sucursal"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />

                <input
                    type="text"
                    placeholder="-Nombre de la empresa"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />

                <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                        type="checkbox"
                        checked={mainBranch}
                        onChange={(e) => setMainBranch(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    Sucursal principal
                </label>
            </div>

            {canCreate ? (
                <button
                    onClick={async () => {
                        await updateBranch({
                            name: branchName.trim(),
                            newName: newName.trim(),
                            main_branch: mainBranch,
                        });

                        setBranchName("");
                        setNewName("");
                        setMainBranch(false);
                    }}
                    className="mt-4 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                    Crear
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    No puede haber campos vacíos
                </div>
            )}
        </div>
    );
}