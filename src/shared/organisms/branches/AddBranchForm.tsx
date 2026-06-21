import { useState } from "react";
import { addBranch } from "../../../api/BranchApi";
import { Input } from "../../atoms/Input";
import { Checkbox } from "../../atoms/Checkbox";
import { Button } from "../../atoms/Button";
import { AlertMessage } from "../../atoms/AlertMessage";

export function AddBranchForm() {
    const [branchName, setBranchName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [mainBranch, setMainBranch] = useState(false);

    const canCreate =
        branchName.trim() !== "" &&
        companyName.trim() !== "";

    const handleCreate = async () => {
        await addBranch({
            name: branchName.trim(),
            companyName: companyName.trim(),
            main_branch: mainBranch,
        });

        setBranchName("");
        setCompanyName("");
        setMainBranch(false);
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Crea tu sucursal
            </h1>

            <p className="mt-1 text-sm text-slate-500">
                Completa el nombre de la sucursal y la empresa asociada.
            </p>

            <div className="mt-8 space-y-3">
                <Input
                    placeholder="-Nombre de la sucursal"
                    value={branchName}
                    onChange={setBranchName}
                />

                <Input
                    placeholder="-Nombre de la empresa"
                    value={companyName}
                    onChange={setCompanyName}
                />

                <Checkbox
                    checked={mainBranch}
                    label="Sucursal principal"
                    onChange={setMainBranch}
                />
            </div>

            {canCreate ? (
                <Button
                    text="Crear"
                    onClick={handleCreate}
                />
            ) : (
                <AlertMessage text="No puede haber campos vacíos" />
            )}
        </div>
    );
}