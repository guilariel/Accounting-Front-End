import { useState } from "react";
import { updateBranch } from "../../../api/BranchApi";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { Checkbox } from "../../atoms/Checkbox";
import { AlertMessage } from "../../atoms/AlertMessage";

export function UpdateBranchForm() {
    const [branchName, setBranchName] = useState("");
    const [newName, setNewName] = useState("");
    const [mainBranch, setMainBranch] = useState(false);

    const canUpdate =
        branchName.trim() !== "" &&
        newName.trim() !== "";

    const handleUpdate = async () => {
        await updateBranch({
            name: branchName.trim(),
            newName: newName.trim(),
            main_branch: mainBranch,
        });

        setBranchName("");
        setNewName("");
        setMainBranch(false);
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">
                Actualiza tu sucursal
            </h1>

            <p className="mt-1 text-sm text-slate-500">
                Completa el nombre actual y el nuevo nombre de la sucursal.
            </p>

            <div className="mt-8 space-y-3">
                <Input
                    placeholder="-Nombre de la sucursal"
                    value={branchName}
                    onChange={setBranchName}
                />

                <Input
                    placeholder="-Nuevo nombre"
                    value={newName}
                    onChange={setNewName}
                />

                <Checkbox
                    checked={mainBranch}
                    label="Sucursal principal"
                    onChange={setMainBranch}
                />
            </div>

            {canUpdate ? (
                <Button
                    text="Actualizar"
                    onClick={handleUpdate}
                />
            ) : (
                <AlertMessage text="No puede haber campos vacíos" />
            )}
        </div>
    );
}