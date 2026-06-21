import { DeleteBranchForm } from "../shared/organisms/branches/DeleteBranchForm";
import { DeleteCompanyForm } from "../shared/organisms/companies/DeleteCompanyForm";
import { FormPageTemplate } from "../shared/templates/FormPageTemplate";

export function DeleteCompanyPage(){
    return(
         <>
            <DeleteCompanyForm/>
            <DeleteBranchForm/>
        </>
    );
}