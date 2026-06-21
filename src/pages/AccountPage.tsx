import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { getUserByEmail } from "../api/UserApi";
import { AccountCard } from "../shared/organisms/accounts/AccountCard";
import { useSelector } from "react-redux";
import { FormPageTemplate } from "../shared/templates/FormPageTemplate";

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
            <AccountCard user={userData} />
        </div>
    );
}

