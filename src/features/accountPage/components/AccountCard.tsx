import { useState, useEffect } from "react";
import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import { getUserBranchesByName } from "../../../api/UserBranchApi";
import { getAllBalances, getAllByUserBranches  } from "../../../api/AccountApi";
import type { User } from "../../../types/User";
import { AccountInfo } from "../../../features/accountPage/components/AccountInfo";

export function AccountCard({ user }: { user: User | null }) {
    const [branchData, setBranchData] = useState<Branch[] | null>(null);
    const [accountData, setAccountData] = useState<Account[] | null>(null);
    const [balanceData, setBalanceData] = useState<AccountBalance[] | null>(null);

     useEffect(() => {
            if (!user?.email) return;
            async function loadData() {
    
                console.log(user?.email);
                const branches = await getUserBranchesByName(user?.email || "");
                setBranchData(branches);
    
                const accounts = await getAllByUserBranches({
                    user_name: user?.email || "",
                    branches
                })
                setAccountData(accounts);
    
                const balances = await getAllBalances(accounts);
                setBalanceData(balances);
            }
    
            loadData();
        }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto p-6">
        {user && branchData && accountData && balanceData ? (
            <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome, {user.name}
                    </h2>

                    <p className="text-gray-600 mt-2">
                        {user.email}
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Branches
                            </p>
                            <p className="text-2xl font-bold text-blue-600">
                                {branchData.length}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Accounts
                            </p>
                            <p className="text-2xl font-bold text-green-600">
                                {accountData.length}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Balances
                            </p>
                            <p className="text-2xl font-bold text-purple-600">
                                {balanceData.length}
                            </p>
                        </div>
                    </div>
                </div>

                <AccountInfo
                    user={user}
                    branchData={branchData}
                    accountData={accountData}
                    balanceData={balanceData}
                />
            </div>
        ) : (
            <div className="flex justify-center items-center py-20">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center">
                    <div className="animate-pulse">
                        <p className="text-gray-600 text-lg">
                            Loading account information...
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}