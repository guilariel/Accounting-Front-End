import type { GeneralBalance, GetBranchBalance, GetCompanyBalance } from "../types/Balance";
import { api } from "../App";
import type { Branch } from "../types/Branch";
export async function getLatestBranchBalance(branch: GetBranchBalance): Promise<GeneralBalance> {
    const response = await api.get<GeneralBalance>(
        "/balance/branch",
        {
            params: branch
            
        }
    );
    return response.data;
}

export async function getLatestCompanyBalance(company: GetCompanyBalance): Promise<GeneralBalance> {
    const response = await api.get<GeneralBalance>(
        "/balance/company",
        {
            params: company
            
        }
    );
    return response.data;
}

export async function getBalancesByBranches(branches: Branch[]) {
    const response = await api.post<GeneralBalance[]>(
            "/balance/AllBranches",
            branches
        );

        return response.data;

}