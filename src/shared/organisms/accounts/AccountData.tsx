import type { Branch } from "../../../types/Branch";
import type { Account } from "../../../types/Account";
import type { AccountBalance } from "../../../types/Balance";
import type { User } from "../../../types/User";
import { P } from "../../molecules/P";
import { LedgerSearch } from "../balances/LedgerSearch";
import { JournalCard } from "../balances/JournalCard";
import { AccountBranchInfo } from "./AccountBranchInfo";
import { AccountMainData } from "./AccountMainData";

export function AccountData({ user, branch, account, balance }: {
    user: User | null;
    branch: Branch | null;
    account: Account | null;
    balance: AccountBalance | null;
}) {
    return (
        <div bg-white rounded-2xl shadow-md border-gray-200 overflow-hidden>
            <div
                key={account?.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
                <AccountMainData account={account} balance={balance}/>
                <AccountBranchInfo branch={branch} user={user} />
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