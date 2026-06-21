import { useEffect, useState } from "react";
import type { UserRole } from "../../../types/User";
import { GetRole } from "../../../api/UserBranchApi";

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
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500">Loading role...</p>
            </div>
        );
    }

    return (
        <div className="mt-6 border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                User Role
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Role Name</p>
                    <p className="font-semibold text-lg">
                        {userRole.role}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium text-gray-700">
                        {userRole.description}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Administrator
                    </p>
                    <p
                        className={`font-semibold ${
                            userRole.admin
                                ? "text-green-600"
                                : "text-gray-600"
                        }`}
                    >
                        {userRole.admin ? "Yes" : "No"}
                    </p>
                </div>
            </div>
        </div>
    );
}