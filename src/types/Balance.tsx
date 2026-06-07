export interface GeneralBalance {
    company_name: string;
    branch_name: string;
    date: string;
    total_liabilities: number;
    total_assets: number;
    net_worth: number;
}

export interface AccountBalance {
    account_name: string;
    balance: number;
    date: string;
}

export interface GetBranchBalance {
    branch_name: string;
    date: string;
}

export interface GetCompanyBalance {
    company_name: string;
    date: string;
}

    /*public class GetGeneralBalanceCompanyDto
    {
        public string company_name { get; set; } = null!;
        public DateTimeOffset date { get; set; }
    }
/*    public class BalanceDto
    {
        public string account_name { get; set; } = null!;
        public decimal balance { get; set; }
        public DateTimeOffset date { get; set; }
    } */