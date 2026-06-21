import { AddAccountCard } from "../features/manageAccountsPage.tsx/components/AddAccount";
import { DeleteAccountCard } from "../features/manageAccountsPage.tsx/components/DeleteAccount";
import { UpdateAccountCard } from "../features/manageAccountsPage.tsx/components/UpdateAccount";
export function AccountsPage() {
    return (
        <div className="mx-auto max-w-4xl p-6">
            <h1 className="mb-8 text-3xl font-bold text-slate-800">
                Administración de cuentas
            </h1>

            <div className="space-y-8">
                <AddAccountCard />
                <UpdateAccountCard />
                <DeleteAccountCard />
            </div>
        </div>
    );
}