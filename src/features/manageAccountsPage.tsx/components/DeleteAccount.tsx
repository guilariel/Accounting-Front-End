import { useState } from "react";
import { deleteAccount } from "../../../api/AccountApi";
import type { GetAccount } from "../../../types/Account";

export function DeleteAccountCard() {
    const [branchName, setBranchName] = useState("");
    const [name, setName] = useState("");

    const account: GetAccount = {
        branch_name: branchName,
        name,
    };

    const canDelete =
        branchName.trim() !== "" &&
        name.trim() !== "";

    const resetForm = () => {
        setBranchName("");
        setName("");
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Eliminar cuenta
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Ingresa la sucursal y el nombre de la cuenta a eliminar.
            </p>

            <div className="space-y-4">
                <input
                    placeholder="Sucursal"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Nombre de la cuenta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />
            </div>

            {canDelete ? (
                <button
                    onClick={async () => {
                        await deleteAccount(account);
                        resetForm();
                    }}
                    className="mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                >
                    Eliminar
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Completa los campos obligatorios.
                </div>
            )}
        </div>
    );
}