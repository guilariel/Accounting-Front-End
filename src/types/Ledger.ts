export interface LedgerEntry {
    account_name: string;
    entry_date: string;
    branch_name: string;
    created_by: string;
    description: string;
    running_balance: number;
}

export interface GetLedger {
    account_name: string;
    branch_name: string;
    created_by: string;
}

export interface GetLedgerByTime {
    account_name: string;
    entry_date: string;
}


