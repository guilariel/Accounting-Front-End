import { useState } from "react";
import { useEffect as UseEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginApi() {
    const [error, setError] = useState<string>("");

    const HandleLogIn = () => {
        try {
            window.location.href = "http://localhost:5070/auth/login";
        }
        catch (err: any) {
            setError(err.message || "error while login in");
        }
    };

    return (
        <div>
            <button onClick={HandleLogIn}>
                Log In
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export function GoogleCallback() {
    const navigate = useNavigate();

    UseEffect(() => {
        console.log("URL:", window.location.href);
        console.log("SEARCH:", window.location.search);

        const params = new URLSearchParams(
            window.location.search
        );

        const token = params.get("token");
        const email = params.get("email");

        console.log("TOKEN:", token);
        console.log("EMAIL:", email);

        if (token) {
            localStorage.setItem("token", token);
        }
        if (email) {
            localStorage.setItem("email", email);
        }
        navigate("/home");
    }, []);
    return (<div>Callback</div>);
}