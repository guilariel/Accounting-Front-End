import axios from "axios";
import type { Account } from "../types/Account";

export async function getAccountByUser(email: string): Promise<Account[]> {
    const response = await axios.get<Account[]>(
        "https://localhost:7248/Accounts/GetAccountsByUserEmail",
        {
            params: {
                email
            }
        }
    );
    return response.data;
}