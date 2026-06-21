import { useEffect, useState } from "react";
import type { Company } from "../types/Company";
import { getAllCompanies } from "../api/CompanyApi";
import { CompanyCard } from "../features/companyPage/components/CompanyCard";

export function CompanyPage() {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-5xl font-extrabold text-slate-800">
                            Companies
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Explore and manage company information.
                        </p>
                    </div>

                    <div className="w-full md:w-96">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="🔍 Search company..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mb-8">
                    <div className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-sm border border-slate-200">
                        <span className="text-sm text-slate-500">
                            Companies found:
                        </span>
                        <span className="ml-2 font-bold text-slate-800">
                            {filteredCompanies.length}
                        </span>
                    </div>
                </div>

                {/* Companies */}
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
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-12 shadow-sm border border-slate-200">
                        <p className="text-lg font-medium text-slate-700">
                            No companies found
                        </p>
                        <p className="text-slate-500 mt-2">
                            Try another search term.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}