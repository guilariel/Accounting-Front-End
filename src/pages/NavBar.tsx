import { Button } from "../shared/atoms/Button";
import { NavBarButton } from "../shared/atoms/NavBarButton";
import { LogInWithGoogle } from "../shared/atoms/OAuthButton";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/90 backdrop-blur-md text-white shadow-xl">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-18 items-center justify-between">

                    {/* Logo */}
                    <div
                        className="cursor-pointer"
                        onClick={() => navigate("/home")}
                    >
                        <h1 className="text-2xl font-bold tracking-wide">
                            <span className="text-cyan-400">Accounting</span>
                            <span className="text-white">App</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <NavBarButton
                            text="Home"
                            onClick={() => navigate("/home")}
                        />

                        <NavBarButton
                            text="Account"
                            onClick={() => navigate("/account")}
                        />

                        <NavBarButton
                            text="Companies"
                            onClick={() => navigate("/company")}
                        />

                        <NavBarButton
                            text="Add companies"
                            onClick={() => navigate("/add-company")}
                        />

                        <NavBarButton
                            text="Update companies"
                            onClick={() => navigate("/update-company")}
                        />

                        <NavBarButton
                            text="Delete companies"
                            onClick={() => navigate("/delete-company")}
                        />

                        <NavBarButton
                            text="Transactions"
                            onClick={() => navigate("/transactions")}
                        />

                        <NavBarButton
                            text="Mannage accounts"
                            onClick={() => navigate("/manage-accounts")}
                        />
                    </div>

                    {/* Login */}
                    <div className="mb-3 ml-2">
                        <Button
                            text="Iniciar sesión"
                            onClick={LogInWithGoogle}
                        />
                    </div>

                </div>
            </div>
        </nav>
    );
}