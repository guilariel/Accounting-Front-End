import { useState } from "react";
import { addAccount } from "../../../api/AccountApi";
import type { AddAccount } from "../../../types/Account";

export function AddAccountCard() {
    const [branchName, setBranchName] = useState("");
    const [parentAccountName, setParentAccountName] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [nature, setNature] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [roleName, setRoleName] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

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

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Crear cuenta
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa los datos de la cuenta.
            </p>

            <div className="space-y-4">
                <input
                    name="branch_name"
                    placeholder="Sucursal"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="parent_account_name"
                    placeholder="Cuenta padre"
                    value={parentAccountName}
                    onChange={(e) => setParentAccountName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="name"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="type"
                    placeholder="Tipo"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="nature"
                    placeholder="Naturaleza"
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="role_name"
                    placeholder="Nombre del rol"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <input
                    name="role_description"
                    placeholder="Descripción del rol"
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                />

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isactive"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    Activa
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="is_admin"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    />
                    Administrador
                </label>
            </div>

            {canCreate ? (
                <button
                    onClick={async () => {
                        await addAccount(account);
                        resetForm();
                    }}
                    className="mt-4 rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                    Crear
                </button>
            ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">
                    Completa los campos obligatorios.
                </div>
            )}
        </div>
    );
}