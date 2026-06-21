import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { getUserByEmail } from "../api/UserApi";
import { AccountCard } from "../features/accountPage/components/AccountCard";
import { useSelector } from "react-redux";

export function AccountPage() {
    const email = useSelector(
        (state: any) => state.auth.email
    );
    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
        if (!email) return;
        async function loadData() {
            const user = await getUserByEmail(email);
            setUserData(user);
        }

        loadData();
    }, [email]);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto p-6">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Account Page
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Manage accounts, balances, journals and ledgers.
                    </p>
                </div>

                <AccountCard user={userData} />
            </div>
        </div>
    );
}

