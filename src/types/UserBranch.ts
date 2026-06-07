export interface UserBranch {
    user_name: string;
    branch_name: string;
    role_name: string;
}

export interface GetUserBranch {
    user_name: string;
    branch_name: string;
}

/*namespace Accounting.Application.Dtos
{
    public class UserBranchDto
    {
        public string user_name { get; set; }
        public string branch_name { get; set; }
        public string role_name { get; set; }
    }
    public class GetUserBranchDto
    {
        public string user_name { get; set; }
        public string branch_name { get; set; }
    }
}
*/
