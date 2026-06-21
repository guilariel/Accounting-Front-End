import { useState } from "react";
import { deleteCompany } from "../../../api/CompanyApi";
import { Input } from "../../../shared/atoms/Input";
import { Button } from "../../../shared/atoms/Button";

export function DeleteCompanyForm() {
    const [companyName, setCompanyName] = useState<string>("");

    const handleDelete = async () => {
        await deleteCompany(companyName);
        setCompanyName("");
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Elimina tu compania</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la compania para eliminarla.
            </p>
            <Input
                placeholder="Nombre de la compania"
                value={companyName}
                onChange={(value: string) => setCompanyName(value)}
            />
            {companyName != "" ? (
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