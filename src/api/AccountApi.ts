import type { Account, AddAccount, GetAccount, UserAndBranches } from "../types/Account";
import type { AddJournalEntryLineDto } from "../types/JournalEntry";
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
    accountName: string,
    branchName: string
): Promise<void> {

    await api.delete(
        "/accounts",
        {
            params: {
                accountName,
                branchName
            }
        }
    );
}


export async function updateAccount(account: Account): Promise<void> {
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
    accountName: string,
    branchName: string
): Promise<any[]> {

    const response = await api.get<any[]>(
        "/accounts/transactions",
        {
            params: {
                accountName,
                branchName
            }
        }
    );

    return response.data;
}

export async function changeFunds(
    journalEntry: AddJournalEntryLineDto
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
