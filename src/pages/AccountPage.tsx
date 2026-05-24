import { useContext, useEffect, useState } from "react";
import type { User } from "../types/User";
import  axios  from "axios";
import { UserContext } from "../provider/UserProvider";

export function AccountPage() {
    const context = useContext(UserContext);
    const [userData, setUserData] = useState<User | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const GetUserData = async () => {
            setLoading(true);
            try {
                console.log("Fetching user data for email:", context?.email);
                const response = await axios.get<User>("https://localhost:7248/Users/GetUserByEmail", {
                    params: {
                        email: context?.email
                    }
                });
                setUserData(response.data);
            } catch (err: any) {
                setError(err.message || "error while fetching user data");
            } finally {
                setLoading(false);
            }

        }
        GetUserData();
    }, [context?.email]);

    return (
        <div>
            <h1>Account Page</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Email: {userData.email}</p>
                    <h3>Branches:</h3>
                    <ul>
                        {userData.branches.map((branch) => (
                            <li key={branch.name}>
                                <strong>{branch.name}</strong> - {branch.company_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}