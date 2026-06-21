import { useEffect, useState } from "react";
import type { UserRole } from "../../../types/User";
import { GetRole } from "../../../api/UserBranchApi";
import { P } from "../../molecules/P";

export function AccountRole({
    user,
    branch,
}: {
    user: string;
    branch: string;
}) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchRole() {
            const role = await GetRole({
                user_name: user,
                branch_name: branch,
            });

            if (!cancelled) {
                setUserRole(role ?? null);
            }
        }

        fetchRole();

        return () => {
            cancelled = true;
        };
    }, [user, branch]);

    if (!userRole) {
        return (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                <p className="text-sm text-slate-500">Loading role...</p>
            </div>
        );
    }

    return (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                    User Role
                </h2>
                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700">
                    Access
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                    <P title="Role Name" text={userRole.role} />
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <P title="Description" text={userRole.description} />
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <P
                        title="Administrator"
                        text={userRole.admin ? "Yes" : "No"}
                    />
                </div>
            </div>
        </div>
    );
}