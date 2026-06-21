import { useState } from "react";
import { changeFunds } from "../api/AccountApi";
import { useSelector } from "react-redux";

export function TransactionPage() {
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Realiza una transacción
                </h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre de la sucursal
                        </label>
                        <input
                            type="text"
                            value={branchName}
                            onChange={(e) => setBranchName(e.target.value)}
                            placeholder="Ej. Sucursal Centro"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre de la cuenta
                        </label>
                        <input
                            type="text"
                            value={accountName}
                            onChange={(e) => setAccountName(e.target.value)}
                            placeholder="Ej. Caja Principal"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe la transacción"
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Crédito
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={credit}
                                onChange={(e) => setCredit(Number(e.target.value))}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Débito
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={debit}
                                onChange={(e) => setDebit(Number(e.target.value))}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-100 text-red-700 border border-red-300 rounded-lg p-3">
                            {error}
                        </div>
                    )}
                    <button
                        onClick={() => execute()}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
                    >
                        Enviar transacción
                    </button>
                </div>
            </div>
        </div>
    );
}