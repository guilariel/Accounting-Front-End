import type { GeneralBalance } from "../../../types/Balance";
import type { Branch , BranchAndBalance } from "../../../types/Branch";
export function OrganizedData(branches: Branch[], balances: GeneralBalance[]): BranchAndBalance[] {
    return branches.map((branch) => {
        const balance = balances.find((b) => b.branch_name === branch.name);
        return { branch, balance };
    });
}
