import type { Branch } from "./Branch";
import type { Account } from "./Account";
import type { AccountBalance } from "./Balance";    
export interface AccountData {
    branch: Branch;
    account: Account;
    balance: AccountBalance;
}