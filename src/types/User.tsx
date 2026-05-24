import type { Branch } from "./Branch";
export interface User {
    name: string;
    email: string;
    branches: Branch[];
}