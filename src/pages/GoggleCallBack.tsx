import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmail, getToken, saveAuthData } from "../features/OAuth/utils/OAuthStorage";

export function GoogleCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        if (handleOAuthCallback()) {
            navigate("/");
        }else{
            navigate("/login");
        }
    }, []);
    return null;
}

function handleOAuthCallback() : boolean {
    const token = getToken();
    const email = getEmail();

    if (token && email) {
        saveAuthData(token, email);
        return true;
    }
    return false;
}