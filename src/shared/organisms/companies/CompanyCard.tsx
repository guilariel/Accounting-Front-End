import { useEffect, useState } from "react";
import type { Branch, BranchAndBalance } from "../../../types/Branch";
import type { Company } from "../../../types/Company";
import type { GeneralBalance } from "../../../types/Balance";
import { getAllBranchesByCompany } from "../../../api/BranchApi";
import { getBalancesByBranches, getLatestCompanyBalance } from "../../../api/BalanceApi";
import { OrganizedData } from "../../../utils/CreateBalancedata";
import { BranchCards } from "../branches/BranchCards";
import { CompanyDetails } from "./CompanyDetails";
import { Button } from "../../atoms/Button";

export function CompanyCard({ company }: { company: Company }) {
    const [branchData, setBranchData] = useState<Branch[] | null>(null);
    const [companyBalance, setCompanyBalance] = useState<GeneralBalance | null>(null);
    const [BranchesBalance, setBranchesBalance] = useState<GeneralBalance[] | null>(null);

    const [organizedData, setOrganizedData] = useState<BranchAndBalance[]>([]);

    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        async function loadData() {
            const branches = await getAllBranchesByCompany(company.name);
            setBranchData(branches);

            const getCompanyBalance = {
                company_name: company.name,
                date: new Date().toISOString()
            };

            const companyBalance = await getLatestCompanyBalance(getCompanyBalance);
            setCompanyBalance(companyBalance);

            const branchesBalance = await getBalancesByBranches(branches);
            setBranchesBalance(branchesBalance);
        }
        loadData();
    }, []);

    useEffect(() => {
        if (branchData && BranchesBalance) {
            setOrganizedData(OrganizedData(branchData, BranchesBalance));
        }
    }, [branchData, BranchesBalance, expanded]);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex flex-col gap-3 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        Company: {company.name}
                    </h2>
                </div>

                <Button
                    onClick={() => setExpanded(!expanded)}
                    text={expanded ? "Hide Details" : "Show Details"}
                />
            </div>

            {expanded && (
                <div className="space-y-6 p-6">
                    {companyBalance && (
                        <CompanyDetails companyBalance={companyBalance} />
                    )}
                    {organizedData.length > 0 && (
                        <BranchCards branchAndBalance={organizedData} />
                    )}
                </div>
            )}
        </div>
    );
}