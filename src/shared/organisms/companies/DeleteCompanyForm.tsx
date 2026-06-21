import { DeleteForm } from "../../molecules/DeleteForm";

export function DeleteCompanyForm() {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-800">Elimina tu compania</h1>
            <p className="mt-1 mb-8 text-sm text-slate-500">
                Completa el nombre de la compania para eliminarla.
            </p>
            <DeleteForm isCompany={true}/>
        </div>
    );
}