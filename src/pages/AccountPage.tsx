import { useContext, useEffect, useState } from "react";
import type { User } from "../types/User";
import { UserContext } from "../provider/UserProvider";
import { getUserByEmail } from "../api/UserApi";
import { getUserBranchesByName } from "../api/UserBranchApi";
import { getAllByUserBranches, getAllBalances } from "../api/AccountApi";
import type { Branch } from "../types/Branch";
import type { Account } from "../types/Account";
import type { AccountBalance } from "../types/Balance";
import type { AccountData } from "../types/AcountData";

export function AccountPage() {
    const context = useContext(UserContext);
    const [userData, setUserData] = useState<User | null>(null);
    const [branchData, setBranchData] = useState<Branch[] | null>(null);
    const [accountData, setAccountData] = useState<Account[] | null>(null);
    const [balanceData, setBalanceData] = useState<AccountBalance[] | null>(null);
    useEffect(() => {
        async function loadData() {
            const user = await getUserByEmail(context?.email || "");
            setUserData(user);

            const branches = await getUserBranchesByName(context?.email || "");
            setBranchData(branches);

            const userAndBranches = {
                user_name: context?.email || "",
                branches
            };


            const accounts = await getAllByUserBranches({
                user_name: userAndBranches.user_name,
                branches
            });

            setAccountData(accounts);

            const balances = await getAllBalances(accounts);
            setBalanceData(balances);
        }

        loadData();
    }, [context?.email]);

    const organized =
        branchData && accountData && balanceData
            ? organizeData(branchData, accountData, balanceData)
            : [];

    return (
        <div>
            <h1>Account Page</h1>
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Email: {userData.email}</p>
                </div>
            )}
            {organized.map(item => (
                <div key={item.account.name}>
                    <h1>Account</h1>

                    <p>Name: {item.account.name}</p>
                    <p>
                        Status: {item.account.is_active ? "Active" : "Inactive"}
                    </p>

                    <p>Balance: {item.balance.balance.toString()}</p>
                    <p>Date: {item.balance.date.toString()}</p>

                    <h2>Branch</h2>

                    <p>Name: {item.branch.name}</p>
                    <p>Company: {item.branch.company_name}</p>
                    <p>
                        Main branch: {item.branch.main_branch ? "Yes" : "No"}
                    </p>
                </div>
            ))}
        </div>
    );
}

function organizeData(
    branches: Branch[],
    accounts: Account[],
    balances: AccountBalance[]
): AccountData[] {

    return accounts.map(account => ({
        account,
        branch: branches.find(
            branch => branch.name === account.branch_name
        )!,
        balance: balances.find(
            balance => balance.account_name === account.name
        )!
    }));
}