import axios from "axios";
import type {
  GeneralBalance
} from "../types/Balance";
import type { Branch, UpdateBranch } from "../types/Branch";
import type { UserBranch } from "../types/UserBranch";
import { api } from "../App";

export async function getBranch(
  branchName: string,
): Promise<GeneralBalance> {

  const response = await api.get<GeneralBalance>(
    `/branch/${branchName}`,
  );

  return response.data;
}
export async function addBranch(branch: Branch): Promise<void> {
  await api.post(
    "/branch",
    branch
  );
}

export async function deleteBranch(branchName: string): Promise<void> {
  await api.delete(
    `/branch/${branchName}`
  );
}

export async function getAllBranchesByCompany(companyName: string): Promise<Branch[]> {
  const response = await api.get<Branch[]>(
      `/branch/company/${companyName}`
  );
  return response.data;
}

export async function getAllByUserBranch(userBranch: UserBranch[]): Promise<Branch[]> {
  const response = await api.get<Branch[]>(
    "/branch/user-branches",
    {
        params: {
          userBranch
        }
    }
  );
  return response.data;
}

export async function updateBranch(branch: UpdateBranch): Promise<void> {
  await api.put(
    "/branch",
    branch
  );
}

export async function getAllBranches(): Promise<Branch[]> {
  const response = await api.get<Branch[]>(
    "/branch/all"
  );
  return response.data;
}