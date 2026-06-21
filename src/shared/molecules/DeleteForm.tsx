import { useState } from "react";
import { deleteBranch } from "../../api/BranchApi";
import { deleteCompany } from "../../api/CompanyApi";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { AlertMessage } from "../atoms/AlertMessage";

interface DeleteFormProps {
    isCompany: boolean;
}

export function DeleteForm({ isCompany }: DeleteFormProps) {
    const [name, setName] = useState("");

    const placeholder = isCompany
        ? "Nombre de la compañía"
        : "Nombre de la sucursal";

    const handleDelete = async () => {
        if (isCompany) {
            await deleteCompany(name);
        } else {
            await deleteBranch(name);
        }

        setName("");
    };

    return (
        <>
            <Input
                placeholder={placeholder}
                value={name}
                onChange={setName}
            />

            {name.trim() ? (
                <Button
                    text="Eliminar"
                    onClick={handleDelete}
                />
            ) : (
                <AlertMessage 
                    text="No puede ser un nombre vacío"
                />
            )}
        </>
    );
}