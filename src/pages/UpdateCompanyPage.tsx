import { UpdateBranchCard } from "../features/updatePage/Components/UpdateBranchCard";
import { UpdateCompanyCard } from "../features/updatePage/Components/UpdateCompanyCard";

export function UpdateCompanyPage(){
    return(
        <div>
            <UpdateCompanyCard/>
            <UpdateBranchCard/>
        </div>
    );
}