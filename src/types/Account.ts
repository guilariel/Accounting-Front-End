export interface Account {
    id: number;
    branch_name: string;
    name: string;
    parent_account_name: string | null;
    type: string;
    nature: string;
    is_active: boolean;
}