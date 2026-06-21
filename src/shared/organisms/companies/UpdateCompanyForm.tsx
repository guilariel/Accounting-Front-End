import { useState } from "react";
import { updateCompany } from "../../../api/CompanyApi";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { AlertMessage } from "../../atoms/AlertMessage";

export function UpdateCompanyForm() {
    const [companyName, setCompanyName] = useState("");
    const [newName, setNewName] = useState("");

    const canUpdate =
        companyName.trim() !== "" &&
        newName.trim() !== "";

    const handleUpdate = async () => {
        await updateCompany({
            name: companyName.trim(),
            newName: newName.trim(),
        });

        setCompanyName("");
        setNewName("");
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Cambia tu compañía
            </h1>

            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre actual y el nuevo nombre de la compañía.
            </p>

            <div className="space-y-3">
                <Input
                    placeholder="-Nombre actual"
                    value={companyName}
                    onChange={setCompanyName}
                />

                <Input
                    placeholder="-Nuevo nombre"
                    value={newName}
                    onChange={setNewName}
                />
            </div>

            {canUpdate ? (
                <Button
                    text="Actualizar"
                    onClick={handleUpdate}
                />
            ) : (
                <AlertMessage text="Los campos no pueden estar vacíos" />
            )}
        </div>
    );
}