import { useState } from "react";
import { deleteAccount } from "../../../api/AccountApi";
import type { GetAccount } from "../../../types/Account";

import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { AlertMessage } from "../../atoms/AlertMessage";

export function DeleteAccountForm() {
    const [branchName, setBranchName] = useState("");
    const [name, setName] = useState("");

    const canDelete =
        branchName.trim() !== "" &&
        name.trim() !== "";

    const resetForm = () => {
        setBranchName("");
        setName("");
    };

    const handleDelete = async () => {
        const account: GetAccount = {
            branch_name: branchName,
            name,
        };

        await deleteAccount(account);
        resetForm();
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
                <Input
                    placeholder="Sucursal"
                    value={branchName}
                    onChange={setBranchName}
                />

                <Input
                    placeholder="Nombre de la cuenta"
                    value={name}
                    onChange={setName}
                />
            </div>

            {canDelete ? (
                <Button
                    text="Eliminar"
                    onClick={handleDelete}
                />
            ) : (
                <AlertMessage text="Completa los campos obligatorios." />
            )}
        </div>
    );
}