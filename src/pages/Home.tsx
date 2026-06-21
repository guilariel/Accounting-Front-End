import { useDispatch } from "react-redux";
import { changeEmail, changeToken } from "../redux/Slice";
import { useEffect } from "react";

export function Home() {
    const dispatch = useDispatch();
    const getEmail = localStorage.getItem("email");
    const getToken = localStorage.getItem("token");
    useEffect(() => {
        dispatch(changeEmail(getEmail));
        dispatch(changeToken(getToken));
    }, [getEmail]);
    return (
        <div className="mb-8 overflow-hidden  bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-xl">
            <div className="max-w-4xl">
                <span className="rounded-full bg-slate-700 px-4 py-1 text-sm font-medium">
                    Dashboard Financiero
                </span>

                <h1 className="mt-6 text-5xl font-bold leading-tight">
                    Bienvenido a tu centro de gestión contable
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                    Administra tus cuentas, supervisa balances y mantén el control
                    financiero de tu organización desde una única plataforma.
                    Accede rápidamente a la información más importante y visualiza
                    los datos necesarios para tomar decisiones con mayor confianza.
                </p>

                <div className="text-left mt-4 ">
                    <h2 className="mb-4 text-2xl font-bold text-slate-300">
                        Descripción General
                    </h2>

                    <p className="mb-4 text-slate-600">
                        Esta plataforma ha sido diseñada para simplificar la gestión
                        financiera y contable, permitiéndote acceder de manera rápida
                        a la información más relevante de tu organización.
                    </p>

                    <p className="mb-4 text-slate-600">
                        Desde el panel principal podrás consultar balances, visualizar
                        movimientos recientes, administrar cuentas y explorar distintos
                        indicadores financieros a través de una interfaz clara e intuitiva.
                    </p>

                    <p className="text-slate-600">
                        Utiliza las diferentes herramientas disponibles para mantener
                        tus registros organizados y obtener una visión general del estado
                        económico de tu empresa en tiempo real.
                    </p>
                </div>
            </div>
        </div>
    );
}