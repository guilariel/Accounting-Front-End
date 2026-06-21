import { AddAccountForm } from "../shared/organisms/accounts/AddAccountForm";
import { DeleteAccountForm } from "../shared/organisms/accounts/DeleteAccountForm";
import { UpdateAccountForm } from "../shared/organisms/accounts/UpdateAccount";
import { FormPageTemplate } from "../shared/templates/FormPageTemplate";
export function AccountsPage() {
    return (
        <>
            <AddAccountForm />
            <DeleteAccountForm />
            <UpdateAccountForm />
        </>
    );
}