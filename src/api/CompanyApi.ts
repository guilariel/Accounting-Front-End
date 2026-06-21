import axios from "axios";
import type { Company, UpdateCompany } from "../types/Company";
import type { Branch } from "../types/Branch";
import { api } from "../App";
export async function getCompany(companyName: string): Promise<Company> {
    const response = await api.get<Company>(
        `/company/${companyName}`
    );

    return response.data;
}

export async function getAllCompaniesByBranches(branches: Branch[]): Promise<Company[]> {
    const response = await api.get<Company[]>(
        "/company/branch-company",
        {
            params: {
                branches
            }
        }
    );
    return response.data;
}

export async function addCompany(companyName: string): Promise<void> {
    await api.post(
        `/company/${companyName}`
    );
}

export async function deleteCompany(companyName: string): Promise<void> {
    await api.delete(
        `/company/${companyName}`
    );
}

export async function updateCompany(company: UpdateCompany): Promise<void> {
    await api.put(
        `/company`,
        company
    );
}

export async function getAllCompanies(): Promise<Company[]> {
    const response = await api.get<Company[]>(
        "/company/all"
    );
    return response.data;
}
