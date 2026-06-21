import type { Branch } from "../../../types/Branch";

export function BranchInfo ({ branch }: { branch: Branch }) {
    return (
        <div className="bg-gray-50 border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
                {branch.name}
            </h3>

            <div className="space-y-1 text-sm text-gray-600">
                <p>
                    <span className="font-semibold">
                        Company:
                    </span>{" "}
                    {branch.companyName}
                </p>

                <p>
                    <span className="font-semibold">
                        Main Branch:
                    </span>{" "}
                    {branch.main_branch ? "Yes" : "No"}
                </p>
            </div>
        </div>
    );
}