import type { Account, AddAccount, GetAccount, UpdateAccount, UserAndBranches } from "../types/Account";
import type {  JournalEntryLines, AddJournalEntryLine } from "../types/JournalEntry";
import type { Branch } from "../types/Branch";
import { api } from "../App";
import type { AccountBalance } from "../types/Balance";

export async function addAccount(account: AddAccount): Promise<void> {
    await api.post(
        "/accounts",
        account
    );
}

export async function deleteAccount(
    account: GetAccount
): Promise<void> {

    await api.delete(
        "/accounts",
        {
            params: account
        }
    );
}


export async function updateAccount(account: UpdateAccount): Promise<void> {
    await api.put(
        "/accounts",
        account
    );
}

export async function getAccountByUserAndBranch(account: GetAccount): Promise<Account[]> {
    const response = await api.get<Account[]>(
        "/accounts/user-branch",
        {
            params: account
        }
    );
    return response.data;
}


export async function getCompanyAccounts(companyName: string): Promise<Account[]> {
    const response = await api.get<Account[]>(
        "/accounts/company",
        {
            params: {
                companyName
            }
        }
    );

    return response.data;
}

export async function getAllByUserBranches(
    userAndBranches: UserAndBranches
): Promise<Account[]> {

    const response = await api.post<Account[]>(
        "/accounts/user-branches",
            userAndBranches

    );

    return response.data;
}



export async function getTransactionsByAccount(
    account: GetAccount
): Promise<JournalEntryLines[]> {

    const response = await api.get<JournalEntryLines[]>(
        "/accounts/transactions",
        {
            params: account
        }
    );

    return response.data;
}

export async function changeFunds(
    journalEntry: AddJournalEntryLine
): Promise<void> {

    await api.post(
        "/accounts/funds",
        journalEntry
    );
}

export async function getAccountBalance(
    getAccount: GetAccount
): Promise<string> {

    const response = await api.get<string>(
        "/accounts/balance",
        {
            params: {
                getAccount
            }
        }
    );

    return response.data;
}

export async function getAllBalances(accounts: Account[]): Promise<AccountBalance[]> {
    const response = await api.post<AccountBalance[]>(
        "/accounts/balances",
        accounts
    );
    return response.data;
}
