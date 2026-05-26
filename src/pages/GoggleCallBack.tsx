import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmail, getToken, saveAuthData } from "../features/OAuth/utils/OAuthStorage";

export function GoogleCallback() {
    const navigate = useNavigate();
    useEffect(() => {
        if (handleOAuthCallback()) {
            navigate("/home");
        }
    }, []);
    return null;
}
function handleOAuthCallback() : boolean {
    const token = getToken();
    const email = getEmail();
    console.log("OAuth Callback - Token:", token);
    console.log("OAuth Callback - Email:", email);
    if (token && email) {
        saveAuthData(token, email);
        return true;
    }
    return false;
}