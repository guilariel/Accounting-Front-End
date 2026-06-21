import { TransactionForm } from "../shared/organisms/balances/TrasactionForm";
import { FormPageTemplate } from "../shared/templates/FormPageTemplate";


export function TransactionPage() {
    return (
        <FormPageTemplate title="Realiza una Transaccion">
                <TransactionForm/>
        </FormPageTemplate>
    );
}