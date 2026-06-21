import { useState } from "react";
import { addCompany } from "../../../api/CompanyApi";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { AlertMessage } from "../../atoms/AlertMessage";

export function AddCompanyForm() {
    const [companyName, setCompanyName] = useState<string>("");

    const handleCompany = async () => {
        await addCompany(companyName);
        setCompanyName("");
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Crea tu compania</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la compania para crearla.
            </p>
            <Input
                placeholder="Nombre de la compania:"
                value={companyName}
                onChange={setCompanyName}
            />

            {companyName != "" ? (
                <Button
                    onClick={handleCompany}
                    text="Crear"
                />
            ) : (
                <AlertMessage text="No puede ser un nombre vacio"/>
            )}
        </div>
    );
}