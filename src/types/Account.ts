import type { Branch } from "./Branch";

export interface Account {
    branch_name: string;
    name: string;
    parent_account_name: string | null;
    type: string;
    nature: string;
    is_active: boolean;
}

export interface GetAccount{
    branch_name: string;
    name: string;
}

export interface AddAccount {
    branch_name: string;
    parent_account_name: string | null;
    name: string;
    type: string;
    nature: string;
    start_date: Date;
}

export interface UpdateAccount {
    branch_name: string;
    name: string;
    newName?: string;
    type?: string;
    nature?: string;
    is_active?: boolean;
}

export interface UserAndBranches{
    user_name: string;
    branches: Branch[];
}


/*    public class GetAllAccountsByUserAndBranchesDto
    {
        public string user_name { get; set; }
        public List<Branch> branches { get; set; }
    }*/