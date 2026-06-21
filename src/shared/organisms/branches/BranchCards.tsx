import type { Branch, BranchAndBalance } from "../../../types/Branch";
import type { GeneralBalance } from "../../../types/Balance";
import { BranchInfo } from "./BranchInfo";
import { BalanceInfo } from "../balances/BalanceInfo";

export function BranchCards({ branchAndBalance }: { branchAndBalance: BranchAndBalance[] }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Branches
            </h2>
            {branchAndBalance.map((item) => (
                <BranchCard branch={item.branch} balance={item.balance} />
            ))}
        </div>
    );
}

function BranchCard({ branch, balance }: { branch: Branch, balance: GeneralBalance | undefined }) {
    return (
        <div>
            <div>
                <BranchInfo branch={branch} />
                <BalanceInfo balance={balance} />
            </div>
        </div>
    );
}