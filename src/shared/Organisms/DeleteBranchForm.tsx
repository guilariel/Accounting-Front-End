import { useState } from "react";
import { deleteBranch } from "../../api/BranchApi";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function DeleteBranchForm() {
    const [branchName, setBranchName] = useState<string>("");

    const handleDelete = async () => {
        await deleteBranch(branchName);
        setBranchName("");
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Elimina tu sucursal</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la sucursal para eliminarla.
            </p>
            <Input
                placeholder="Nombre de la compania"
                value={branchName}
                onChange={(value: string) => setBranchName(value)}
            />

            {branchName != "" ? (
                <Button
                    text="Eliminar"
                    onClick={handleDelete}
                />
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">No puede ser un nombre vacio</div>
            )}
        </div>
    );
}