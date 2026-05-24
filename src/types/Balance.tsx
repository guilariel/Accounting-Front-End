export interface GeneralBalance {
    company_name: String;
    branch_name: String;
    date: Date;
    total_liabilities: Number;
    total_assets: Number;
    net_worth: Number;
}

export interface BalanceBranchRequest {
    branch_name: String;
    date: Date;
}