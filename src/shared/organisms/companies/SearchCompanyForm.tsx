import { useEffect, useState } from "react";
import { Input } from "../../atoms/Input";
import { getAllCompanies } from "../../../api/CompanyApi";
import type { Company } from "../../../types/Company";
import { CompanyCard } from "./CompanyCard";

export function SearchCompanyForm() {
    const [companyData, setCompanyData] = useState<Company[] | null>(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadData() {
            const companies = await getAllCompanies();
            setCompanyData(companies);
        }

        loadData();
    }, []);

    const filteredCompanies =
        companyData?.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        ) ?? [];

    return (
        <div className="space-y-6">
            <div className="w-full max-w-xl">
                <div className="relative">
                    <h1 className="text-3xl font-bold mt-2 ml-2 text-gray-800 mb-6">Companies</h1>
                    <Input
                        placeholder="🔎 Search company..."
                        value={search}
                        onChange={setSearch}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 border border-slate-200">
                <span className="text-sm text-slate-500">
                    Companies found
                </span>
                <span className="inline-flex min-w-10 items-center justify-center rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-white">
                    {filteredCompanies.length}
                </span>
            </div>

            {filteredCompanies.length > 0 ? (
                <div className="grid gap-6">
                    {filteredCompanies.map((company) => (
                        <CompanyCard
                            key={company.name}
                            company={company}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                    <p className="text-lg font-semibold text-slate-700">
                        No companies found
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                        Try another search term.
                    </p>
                </div>
            )}
        </div>
    );
}