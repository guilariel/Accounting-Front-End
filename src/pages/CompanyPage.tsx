import { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import type { Branch, BranchAndBalance } from "../types/Branch";
import type { Company } from "../types/Company";
import { getAllBranches, getAllBranchesByCompany } from "../api/BranchApi";
import { getAllCompanies } from "../api/CompanyApi";
import type { GeneralBalance } from "../types/Balance";
import { getBalancesByBranches, getLatestCompanyBalance } from "../api/BalanceApi";
import type { GetCompanyBalance } from "../types/Balance";

export function CompanyPage() {
    const context = useContext(UserContext);
    const [companyData, setCompanyData] = useState<Company[] | null>(null);
    const [branchData, setBranchData] = useState<Branch[] | null>(null);
    useEffect(() => {
        async function loadData() {
            const companies = await getAllCompanies();
            setCompanyData(companies);

            const branches = await getAllBranches();
            setBranchData(branches);
        }
        loadData();
    }, []);
}

function CompanyCard( company: Company ) {
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
        <div>
            <h2>{company.name}</h2>

            {expanded && branchData && companyBalance && BranchesBalance && (
                <div>
                    <h3>Company net worth: {companyBalance.net_worth}</h3>
                    <h3>Company liabilities: {companyBalance.total_liabilities}</h3>
                    <h3>Company assets: {companyBalance.total_assets}</h3>
                    <h3>Branches:</h3>
                    <BranchList branchAndBalance={organizedData!} />
                    
                </div>
            )}
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? "Hide" : "Show"} Details
            </button>
        </div>
    );
}

function BranchList({ branchAndBalance }: { branchAndBalance: BranchAndBalance[] }) {
    return (
        <div>
            <h2>Branches</h2>
                {branchAndBalance.map((b) => (
                    <div key={b.branch.name}>
                        <h3>Branch: {b.branch.name}</h3>
                        <p>Company: {b.branch.company_name}</p>
                        <p>Is Main Branch: {b.branch.main_branch ? "Yes" : "No"}</p>
                        <p>Net Worth: {b.balance.net_worth}</p>
                        <p>Total Liabilities: {b.balance.total_liabilities}</p>
                        <p>Total Assets: {b.balance.total_assets}</p>
                        <p>Date: {b.balance.date}</p>
                    </div>
                ))}
        </div>
    );
}

function OrganizedData(branches: Branch[], balances: GeneralBalance[]) : BranchAndBalance[] {
    return branches.map((branch) => {
        const balance = balances.find((b) => b.branch_name === branch.name)!;
        return { branch, balance };
    });
}