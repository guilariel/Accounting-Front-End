import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import type { User } from "../../../types/User";
import { LedgerSearch } from "../../../features/accountPage/components/LedgerSearch";
import { JournalCard } from "../../../features/accountPage/components/JournalCard";
import { AccountRole } from "./AccountRole";

export function AccountData({ user, branch, account, balance }: {
    user: User | null;
    branch: Branch | null;
    account: Account | null;
    balance: AccountBalance | null;
}){
    return (
    <div className="max-w-5xl mx-auto p-6">
        <div
            key={account?.name}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
        >
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Account Information
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="font-semibold text-lg">
                        {account?.name}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Status</p>
                    <p
                        className={`font-semibold ${
                            account?.is_active
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        {account?.is_active ? "Active" : "Inactive"}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Balance</p>
                    <p className="font-bold text-green-600 text-lg">
                        ${balance?.balance.toLocaleString()}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Balance Date</p>
                    <p className="font-semibold">
                        {balance?.date.toString()}
                    </p>
                </div>
            </div>

            <div className="border-t pt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Branch Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Branch Name</p>
                        <p className="font-semibold">
                            {branch?.name}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Company</p>
                        <p className="font-semibold">
                            {branch?.companyName}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                            Main Branch
                        </p>
                        <p
                            className={`font-semibold ${
                                branch?.main_branch
                                    ? "text-green-600"
                                    : "text-gray-600"
                            }`}
                        >
                            {branch?.main_branch ? "Yes" : "No"}
                        </p>
                    </div>
                </div>
                <AccountRole user={user?.email || ""} branch={branch?.name || ""}/>
            </div>
        </div>

        <div className="mt-8">
            <JournalCard
                accountName={account?.name || ""}
                branchName={branch?.name || ""}
            />
        </div>

        <div className="mt-8">
            <LedgerSearch
                accountName={account?.name || ""}
                branchName={branch?.name || ""}
                createdBy={user?.email || ""}
            />
        </div>
    </div>
);
}