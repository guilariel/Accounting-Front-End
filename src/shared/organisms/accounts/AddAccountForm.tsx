import { useState } from "react";
import { addAccount } from "../../../api/AccountApi";
import type { AddAccount } from "../../../types/Account";

import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { Checkbox } from "../../atoms/Checkbox";
import { AlertMessage } from "../../atoms/AlertMessage";

export function AddAccountForm() {
    const [branchName, setBranchName] = useState("");
    const [parentAccountName, setParentAccountName] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [nature, setNature] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [roleName, setRoleName] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const canCreate =
        branchName.trim() !== "" &&
        name.trim() !== "" &&
        type.trim() !== "" &&
        nature.trim() !== "";

    const resetForm = () => {
        setBranchName("");
        setParentAccountName("");
        setName("");
        setType("");
        setNature("");
        setIsActive(true);
        setRoleName("");
        setRoleDescription("");
        setIsAdmin(false);
    };

    const handleCreate = async () => {
        const account: AddAccount = {
            branch_name: branchName,
            parent_account_name: parentAccountName || null,
            name,
            type,
            nature,
            isactive: isActive,
            start_date: new Date().toISOString(),
            role_name: roleName,
            role_description: roleDescription,
            is_admin: isAdmin,
        };

        await addAccount(account);
        resetForm();
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Crear cuenta
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa los datos de la cuenta.
            </p>

            <div className="space-y-4">
                <Input placeholder="Sucursal" value={branchName} onChange={setBranchName} />
                <Input placeholder="Cuenta padre" value={parentAccountName} onChange={setParentAccountName} />
                <Input placeholder="Nombre" value={name} onChange={setName} />
                <Input placeholder="Tipo" value={type} onChange={setType} />
                <Input placeholder="Naturaleza" value={nature} onChange={setNature} />
                <Input placeholder="Nombre del rol" value={roleName} onChange={setRoleName} />
                <Input placeholder="Descripción del rol" value={roleDescription} onChange={setRoleDescription} />

                <Checkbox
                    checked={isActive}
                    label="Activa"
                    onChange={setIsActive}
                />

                <Checkbox
                    checked={isAdmin}
                    label="Administrador"
                    onChange={setIsAdmin}
                />
            </div>

            {canCreate ? (
                <Button
                    text="Crear"
                    onClick={handleCreate}
                />
            ) : (
                <AlertMessage text="Completa los campos obligatorios." />
            )}
        </div>
    );
}