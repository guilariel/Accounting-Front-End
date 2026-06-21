import axios from "axios";
import type { GetUserBranch, UserBranch } from "../types/UserBranch";
import type { UserRole } from "../types/User";
import { api } from "../App";
import type { Branch } from "../types/Branch";
export async function addUserToBranch(UserBranchDto: UserBranch): Promise<void> {
    await api.post(
        "/user-branch",
        {
            UserBranchDto
        }
    );
}

export async function removeUserFromBranch(UserBranchDto: GetUserBranch): Promise<void> {
    await api.delete(
        "/user-branch",
        {
            params: {
                UserBranchDto
            }
        }
    );
}

export async function getUserBranchesByName(userName: string): Promise<Branch[]> {
    const response = await api.get<Branch[]>(
        `/user-branch/${userName}`
    );
    return response.data;
}

export async function updateUserBranch(UserBranchDto: UserBranch): Promise<void> {
    await api.put(
        "/user-branch",
        {
            UserBranchDto
        }
    );
}

export async function createRoleForUserBranch(UserRoleDto: UserRole): Promise<void> {
    await api.post(
        "/user-branch/Role",
        {
            UserRoleDto
        }
    );
}

export async function GetRole(UserBranch: GetUserBranch) : Promise<UserRole>{
    const response = await api.post(
        "/user-branch/Get-Role",
        UserBranch
    );
    return response.data;
}