import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/");
    };

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    return (
        <div>
            <h1>Home</h1>

            <p>Login exitoso con Google ✅</p>



            {token ? (
                <>
                    <p>Token guardado:</p>

                    <textarea
                        readOnly
                        value={token}
                        rows={5}
                        cols={50}
                    />
                </>
            ) : (
                <p>No hay token</p>
            )}
            {email ? (
                <>
                    <p>Email guardado:</p>
                    <textarea
                        readOnly
                        value={email}
                        rows={5}
                        cols={50}
                    />
                </>
            ) : (
                <p>No hay email</p>
            ) 
            }
            <button onClick={handleLogout}>
                Logout
            </button>
            <button onClick={() => navigate("/account")}>
                Account
            </button>
        </div>
    );
}