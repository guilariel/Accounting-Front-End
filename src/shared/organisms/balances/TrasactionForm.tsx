import { useState } from "react";
import { useSelector } from "react-redux";
import { changeFunds } from "../../../api/AccountApi";
import { LabeledInput } from "../../molecules/LabeledInput";
import { LabeledTextArea } from "../../molecules/LabeledTextArea";
import { AlertMessage } from "../../atoms/AlertMessage";
import { Button } from "../../atoms/Button";


export function TransactionForm() {
    const email = useSelector(
        (state: any) => state.auth.email
    );

    const [branchName, setBranchName] = useState<string>("");
    const [accountName, setAccountName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [credit, setCredit] = useState<number>(0);
    const [debit, setDebit] = useState<number>(0);
    const [error, setError] = useState<string>("");

    const valid = (credit > 0) !== (debit > 0);

    const execute = async () => {
        if (valid) {
            changeFunds({
                account_name: accountName,
                branch_name: branchName,
                created_by: email ?? "",
                description,
                credit,
                debit,
            })
            setAccountName("");
            setBranchName("");
            setCredit(0);
            setDebit(0);
            setDescription("");
        } else {
            setError("No se puede tener debito y credito a la vez");
        }
    }
    
    return (
        <div className="space-y-4 w-full">

            <LabeledInput
                text="Nombre de la sucursal"
                placeholder="Ej. Sucursal Centro"
                value={branchName}
                onChange={setBranchName}
            />

            <LabeledInput
                text="Nombre de la cuenta"
                placeholder="Ej. Caja Principal"
                value={accountName}
                onChange={setAccountName}
            />

            <LabeledInput
                text="Descripción"
                placeholder="Describe la transacción"
                value={description}
                onChange={setDescription}
            />


            <LabeledTextArea
                text="Descripción"
                value={description}
                onChange={setDescription}
                placeholder="Describe la transacción"
                rows={4}
            />

            <LabeledInput
                text="Crédito"
                placeholder="0"
                value={String(credit)}
                onChange={(value) => setCredit(Number(value))}
            />

            <LabeledInput
                text="Débito"
                placeholder="0"
                value={String(debit)}
                onChange={(value) => setDebit(Number(value))}
            />

            {error && (
                <AlertMessage text={error} />
            )}
            <div className="pt-2">
                <Button
                    text="Enviar transacción"
                    onClick={() => execute()}
                />
            </div>
        </div>
    );
}