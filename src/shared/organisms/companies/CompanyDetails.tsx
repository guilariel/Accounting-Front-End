import type { GeneralBalance } from "../../../types/Balance";
import { P } from "../../molecules/P";

export function CompanyDetails({ companyBalance }: { companyBalance: GeneralBalance }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 p-4 shadow-sm ring-1 ring-emerald-100">
                    <P title="Net Worth" text={companyBalance.net_worth} />
                </div>

                <div className="rounded-xl bg-rose-50 p-4 shadow-sm ring-1 ring-rose-100">
                    <P title="Liabilities" text={companyBalance.total_liabilities} />
                </div>

                <div className="rounded-xl bg-sky-50 p-4 shadow-sm ring-1 ring-sky-100">
                    <P title="Assets" text={companyBalance.total_assets} />
                </div>
            </div>
        </div>
    );
}