import { useState, useEffect } from "react";
import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import { getUserBranchesByName } from "../../../api/UserBranchApi";
import { getAllBalances, getAllByUserBranches } from "../../../api/AccountApi";
import type { User } from "../../../types/User";
import { AccountInfo } from "./AccountInfo";
import { AccountNumbers } from "./AccountNumbers";

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
        <div className="mx-auto max-w-7xl p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-sky-600">Overview</p>
                    <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
                        Account Page
                    </h1>
                </div>
            </div>

            {user && branchData && accountData && balanceData ? (
                <div className="space-y-8">
                    <AccountNumbers
                        user={user}
                        branchLength={branchData.length}
                        accountLength={accountData.length}
                        balanceLength={balanceData.length}
                    />
                    <AccountInfo
                        user={user}
                        branchData={branchData}
                        accountData={accountData}
                        balanceData={balanceData}
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center py-20">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                        <div className="animate-pulse">
                            <p className="text-lg text-slate-600">
                                Loading account information...
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}