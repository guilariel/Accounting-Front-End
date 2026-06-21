import type { Branch } from "./Branch";
import type { Account } from "./Account";
import type { AccountBalance } from "./Balance";    
export interface AccountData {
    branch: Branch | null;
    account: Account | null;
    balance: AccountBalance | null;
}