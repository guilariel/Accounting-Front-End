import { useState } from "react";
import type { UpdateAccount } from "../../../types/Account";
import { updateAccount } from "../../../api/AccountApi";

export function UpdateAccountCard() {
    const [branchName, setBranchName] = useState("");
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [type, setType] = useState("");
    const [nature, setNature] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [roleName, setRoleName] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

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

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Actualizar cuenta
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa los datos de la cuenta a actualizar.
            </p>

            <div className="space-y-4">
                <input
                    placeholder="Sucursal"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Nombre actual"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Nuevo nombre"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Tipo"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Naturaleza"
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Nombre del rol"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    placeholder="Descripción del rol"
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    Activa
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    Administrador
                </label>
            </div>

            {canUpdate ? (
                <button
                    onClick={async () => {
                        await updateAccount(account);
                        resetForm();
                    }}
                    className="mt-4 rounded-2xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
                >
                    Actualizar
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Completa los campos obligatorios.
                </div>
            )}
        </div>
    );
}