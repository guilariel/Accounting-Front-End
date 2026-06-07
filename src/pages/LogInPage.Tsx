import { LoginButton } from "../features/OAuth/components/OAuthButton";

export function LogInPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 flex items-center justify-center px-4">

            <div className="card bg-blue bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md">

                {/* Header */}
                <div className="text-center mb-8">
                    {/* <div className="w-20 h-20 rounSded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-md">
                        hola
                    </div> */}

                    <h1 className="text-3xl font-bold mb-2">
                        Bienvenido
                    </h1>

                    <p className="text-sm text-gray-50">
                        Iniciá sesión para continuar con tu cuenta.
                    </p>
                </div>

                {/* Login section */}
                <div className="space-y-5">

                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-gray-300">
                            Continuar con Google
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <LoginButton />
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>

                        <span className="text-sm text-gray-400">
                            Seguro y rápido
                        </span>

                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                        Al iniciar sesión aceptás nuestros términos y políticas.
                    </p>
                </div>
            </div>
        </div>
    );
}