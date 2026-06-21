import { JournalCardForm } from "./JournalCardForm";

export function JournalCard({ accountName, branchName }: { accountName: string; branchName: string }) {
    return (
        <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5">
            <div className="w-full">
                <p className="text-sm font-medium text-sky-600">Transactions</p>
                <h1 className="text-3xl font-bold text-slate-800">
                    Journal Entries
                </h1>
                <p className="mt-1 text-sm text-slate-500 mb-3">
                    Search transactions by date.
                </p>
                <JournalCardForm accountName={accountName} branchName={branchName} />
            </div>
        </div>
    );
}