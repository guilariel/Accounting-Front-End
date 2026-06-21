import type { User } from "../../../types/User";

export function AccountNumbers({user, branchLength, accountLength, balanceLength} : {
    user: User, 
    branchLength: number, 
    accountLength: number, 
    balanceLength: number
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-3xl font-bold text-gray-800">
                Welcome, {user.name}
            </h2>

            <p className="text-gray-600 mt-2">
                {user.email}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Branches
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                        {branchLength}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Accounts
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                        {accountLength}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                        Balances
                    </p>
                    <p className="text-2xl font-bold text-purple-600">
                        {balanceLength}
                    </p>
                </div>
            </div>
        </div>
    );
}