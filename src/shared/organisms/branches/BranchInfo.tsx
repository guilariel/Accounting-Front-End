import { P } from "../../molecules/P";
import type { Branch } from "../../../types/Branch";

export function BranchInfo({ branch }: { branch: Branch }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">
                    {branch.name}
                </h3>
                <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700">
                    Branch
                </span>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
                <P
                    title="Company:"
                    text={branch.companyName}
                />

                <P
                    title="Main Branch:"
                    text={branch.main_branch ? "Yes" : "No"}
                />
            </div>
        </div>
    );
}