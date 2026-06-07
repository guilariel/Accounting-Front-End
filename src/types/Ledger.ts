export interface LedgerEntryDto {
    account_name: string;
    entry_date: string;
    branch_name: string;
    created_by: string;
    description: string;
    running_balance: number;
}

export interface GetLedgerDto {
    account_name: string;
    branch_name: string;
    created_by: string;
}

export interface GetLedgerByTime {
    account_name: string;
    entry_date: string;
}


