import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import { P } from "../../molecules/P";

export function AccountMainData({ account, balance }: {
    account: Account | null;
    balance: AccountBalance | null;
}) {
    return (
        <div
            key={account?.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                    <p className="text-sm font-medium text-sky-600">Overview</p>
                    <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                        Account Information
                    </h1>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {account?.is_active ? "Active" : "Inactive"}
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P title="Account Name" text={account?.name} />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P
                        title="Status"
                        text={account?.is_active ? "Active" : "Inactive"}
                    />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P
                        title="Balance"
                        text={`$${balance?.balance.toLocaleString()}`}
                    />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P title="Balance Date" text={balance?.date.toString()} />
                </div>
            </div>
        </div>
    );
}