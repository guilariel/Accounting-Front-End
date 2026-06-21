import { FormPageTemplate } from "../shared/templates/FormPageTemplate";
import { AddCompanyForm } from "../shared/organisms/companies/AddCompanyForm";
import { AddBranchForm } from "../shared/organisms/branches/AddBranchForm";

export function AddCompanyPage() {
    return (
        <>
            <AddCompanyForm />
            <AddBranchForm />
        </>
    );
}