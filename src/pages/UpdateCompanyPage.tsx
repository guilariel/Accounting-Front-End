import { UpdateBranchForm } from "../shared/organisms/branches/UpdateBranchForm";
import { UpdateCompanyForm } from "../shared/organisms/companies/UpdateCompanyForm";
import { FormPageTemplate } from "../shared/templates/FormPageTemplate";

export function UpdateCompanyPage(){
    return(
        <>
            <UpdateBranchForm/>
            <UpdateCompanyForm/>
        </>
    );
}