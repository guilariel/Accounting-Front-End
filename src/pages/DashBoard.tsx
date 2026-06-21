import { LogInWithGoogle } from "../features/OAuth/components/OAuthButton";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/90 backdrop-blur-md text-white shadow-xl">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">

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

                    {/* Navigation */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/home")}
                        >
                            Home
                        </button>

                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/account")}
                        >
                            Account
                        </button>

                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/company")}
                        >
                            Companies
                        </button>

                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/add-company")}
                        >
                            Add companies
                        </button>
                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/update-company")}
                        >
                            Update companies
                        </button>
                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/delete-company")}
                        >
                            Delete companies
                        </button>
                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/transactions")}
                        >
                            Transactions
                        </button>
                        <button
                            className="transition hover:text-cyan-400"
                            onClick={() => navigate("/manage-accounts")}
                        >
                            Mannage accounts
                        </button>
                    </div>

                    {/* Login */}
                    <div>
                        <button
                            onClick={LogInWithGoogle}
                            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
                        >
                            Iniciar sesión
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}