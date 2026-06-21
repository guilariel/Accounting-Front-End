import type { Branch } from "../../../types/Branch";
import type { User } from "../../../types/User";
import { P } from "../../molecules/P";
import { AccountRole } from "./AccountRole";

export function AccountBranchInfo({ user, branch }: {
    user: User | null;
    branch: Branch | null;
}) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                    <p className="text-sm font-medium text-sky-600">Location</p>
                    <h2 className="text-2xl font-semibold text-slate-800">
                        Branch Information
                    </h2>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    {branch?.main_branch ? "Primary" : "Secondary"}
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P title="Branch Name" text={branch?.name} />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P title="Company" text={branch?.companyName} />
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <P
                        title="Main Branch"
                        text={branch?.main_branch ? "Yes" : "No"}
                    />
                </div>
            </div>

            <div className="mt-5">
                <AccountRole user={user?.email || ""} branch={branch?.name || ""} />
            </div>
        </div>
    );
}