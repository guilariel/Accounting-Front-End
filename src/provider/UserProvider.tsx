import React, { useEffect, useState, type ReactNode } from "react";
interface UserContextType{
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = React.createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const getEmail = localStorage.getItem("email");
    const [email, setEmail] = useState<string>(getEmail || "");
    useEffect(() => {
        setEmail(getEmail || "");
    }, [getEmail]);
    return (
        <UserContext.Provider value={{ email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
}