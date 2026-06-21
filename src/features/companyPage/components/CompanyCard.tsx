import { useEffect, useState } from "react";
import type { Branch, BranchAndBalance } from "../../../types/Branch";
import type { Company } from "../../../types/Company";
import type { GeneralBalance } from "../../../types/Balance";
import { getAllBranchesByCompany } from "../../../api/BranchApi";
import { getBalancesByBranches, getLatestCompanyBalance } from "../../../api/BalanceApi";
import { OrganizedData } from "../utils/CreateBalancedata";
import { BranchCards } from "./BranchCards";
import { CompanyDetails } from "./CompanyDetails";

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
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    {company.name}
                </h2>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                    {expanded ? "Hide Details" : "Show Details"}
                </button>
            </div>
            {expanded && companyBalance && (
                <CompanyDetails companyBalance={companyBalance} />
            )}
            {expanded && organizedData.length > 0 && (
                <BranchCards branchAndBalance={organizedData} />
            )}
        </div>
    );
}