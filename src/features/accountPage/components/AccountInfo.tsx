import { organizeData } from "../utils/OrganizeAccountData";
import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import { AccountData } from "./AccountData";
import type { User } from "../../../types/User";

export function AccountInfo({ user ,branchData, accountData, balanceData }: {
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
    <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
                Account Information
            </h1>

            <p className="text-gray-500 mt-2">
                View accounts, balances, branches and transactions.
            </p>
        </div>

        <div className="space-y-8">
            {organized.map((item, index) => (
                <div
                    key={`${item.account?.name}-${index}`}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                >
                    <AccountData
                        user={user}
                        branch={item.branch}
                        account={item.account}
                        balance={item.balance}
                    />
                </div>
            ))}
        </div>

        {organized.length === 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
                <p className="text-yellow-700 font-medium">
                    No account information available.
                </p>
            </div>
        )}
    </div>
);
}