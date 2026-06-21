import type { GeneralBalance } from "./Balance";

export interface Branch {
    name: string;
    companyName: string;
    main_branch: boolean;
}

export interface UpdateBranch {
    name: string;
    newName: string;
    main_branch: boolean;
}

export interface BranchWithoutCompany {
    name: string;
    main_branch: boolean;
}

export interface BranchAndBalance{
    branch: Branch;
    balance: GeneralBalance | undefined;
}