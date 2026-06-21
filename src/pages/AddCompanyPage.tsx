import { AddCompanyCard } from "../features/addCompanyPage/components/AddCompanyCard";
import { AddBranchCard } from "../features/addCompanyPage/components/AddBranchCard";

export function AddCompanyPage(){
    return(
        <div>
            <AddCompanyCard/>
            <AddBranchCard/>
        </div>
    );
}