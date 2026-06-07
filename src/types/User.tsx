import type { Branch } from "./Branch";
export interface User {
    name: string;
    email: string;
}

export interface AddUser {
    name: string;
    email: string;
}

export interface UpdateUser {
    name: string;
    newName?: string;
    email: string;
    newEmail?: string;
}

export interface UserRole {
    role: string;
    description: string;
    admin: boolean;
}

