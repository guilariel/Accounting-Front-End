import { useState } from "react";
import { updateAccount } from "../../../api/AccountApi";
import type { UpdateAccount } from "../../../types/Account";

import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { Checkbox } from "../../atoms/Checkbox";
import { AlertMessage } from "../../atoms/AlertMessage";

export function UpdateAccountForm() {
    const [branchName, setBranchName] = useState("");
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [type, setType] = useState("");
    const [nature, setNature] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [roleName, setRoleName] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const canUpdate =
        branchName.trim() !== "" &&
        name.trim() !== "" &&
        newName.trim() !== "" &&
        type.trim() !== "" &&
        nature.trim() !== "";

    const resetForm = () => {
        setBranchName("");
        setName("");
        setNewName("");
        setType("");
        setNature("");
        setIsActive(true);
        setRoleName("");
        setRoleDescription("");
        setIsAdmin(false);
    };

    const handleUpdate = async () => {
        const account: UpdateAccount = {
            branch_name: branchName,
            name,
            newName,
            type,
            nature,
            is_active: isActive,
            role_name: roleName,
            role_description: roleDescription,
            is_admin: isAdmin,
        };

        await updateAccount(account);
        resetForm();
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Actualizar cuenta
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa los datos de la cuenta a actualizar.
            </p>

            <div className="space-y-4">
                <Input placeholder="Sucursal" value={branchName} onChange={setBranchName} />

                <Input placeholder="Nombre actual" value={name} onChange={setName} />

                <Input placeholder="Nuevo nombre" value={newName} onChange={setNewName} />

                <Input placeholder="Tipo" value={type} onChange={setType} />

                <Input placeholder="Naturaleza" value={nature} onChange={setNature} />

                <Input placeholder="Nombre del rol" value={roleName} onChange={setRoleName} />

                <Input
                    placeholder="Descripción del rol"
                    value={roleDescription}
                    onChange={setRoleDescription}
                />

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

            {canUpdate ? (
                <Button
                    text="Actualizar"
                    onClick={handleUpdate}
                />
            ) : (
                <AlertMessage text="Completa los campos obligatorios." />
            )}
        </div>
    );
}