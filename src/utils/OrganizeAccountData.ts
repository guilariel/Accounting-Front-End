import type { Account } from "../../../types/Account";
import type { Branch } from "../../../types/Branch";
import type { AccountBalance } from "../../../types/Balance";
import type { AccountData } from "../../../types/AcountData";

export function organizeData(
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

