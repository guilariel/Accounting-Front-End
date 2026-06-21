import { LedgerDataForm } from "./LedgerDataForm";

export function LedgerSearch({ accountName, branchName, createdBy }: {
    accountName: string;
    branchName: string;
    createdBy: string;
}) {

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Ledger Search
                </h1>

                <LedgerDataForm accountName={accountName} branchName={branchName} createdBy={createdBy}/>
            </div>
        </div>
    );
}