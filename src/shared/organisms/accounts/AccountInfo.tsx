import { organizeData } from "../../../utils/OrganizeAccountData";
import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import { AccountData } from "./AccountData";
import type { User } from "../../../types/User";
import { AlertMessage } from "../../../shared/atoms/AlertMessage";

export function AccountInfo({ user, branchData, accountData, balanceData }: {
    user: User | null;
    branchData: Branch[] | null;
    accountData: Account[] | null;
    balanceData: AccountBalance[] | null;
}) {

    const organized =
        branchData && accountData && balanceData
            ? organizeData(branchData, accountData, balanceData)
            : [];
    return (
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex flex-col gap-2 border-b border-slate-100 pb-6">
                <p className="text-sm font-medium text-sky-600">Accounts</p>
                <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
                    Account Information
                </h1>
                <p className="text-sm text-slate-500">
                    View accounts, balances, branches and transactions.
                </p>
            </div>

            <div className="space-y-8">
                {organized.map((item, index) => (
                    <AccountData
                        key={`${item.account?.name}-${index}`}
                        user={user}
                        branch={item.branch}
                        account={item.account}
                        balance={item.balance}
                    />
                ))}
            </div>

            {organized.length === 0 && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                    <AlertMessage text="No account information available." />
                </div>
            )}
        </div>
    );
}