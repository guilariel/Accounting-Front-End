import { DeleteBranchForm } from "../shared/Organisms/DeleteBranchForm";
import { DeleteCompanyForm } from "../shared/Organisms/DeleteCompanyForm";

export function DeleteCompanyPage(){
    return(
        <div>
            <DeleteCompanyForm/>
            <DeleteBranchForm/>
        </div>
    );
}