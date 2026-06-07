import axios from "axios";
import type { User } from "../types/User";
import { api } from "../App";
export async function getUserByEmail(email: string): Promise<User> {
    const response = await api.get<User>(
        `/users/${email}` 
    );
    return response.data;
}

export async function addUser(user: User): Promise<void> {
    await api.post(
        "/users",
        user
    );
}

export async function deleteUser(email: string): Promise<void> {
    await api.delete(
        `/users/${email}`
    );
}
