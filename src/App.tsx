import { Routes, Route } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { Home } from "./pages/Home";
import { UserProvider } from "./provider/UserProvider";
import { AccountPage } from "./pages/AccountPage";
import { GoogleCallback } from "./pages/GoggleCallBack";
import axios from "axios";
import { CompanyPage } from "./pages/CompanyPage";
import DashBoard from "./pages/DashBoard";
import { AddCompanyPage } from "./pages/AddCompanyPage";
import { UpdateCompanyPage } from "./pages/UpdateCompanyPage";
import { DeleteCompanyPage } from "./pages/DeleteCompanyPage";
import { TransactionPage } from "./pages/TransactionPage";
import { AccountsPage } from "./pages/ManageAccountPage";

export const api = axios.create({
    baseURL: "https://localhost:7248/api"
});

function App() {
    return (
        <>
            <DashBoard />
            <Routes>
                <Route
                    path="/"
                    element={<LogInPage />}
                />

                <Route
                    path="/auth-success"
                    element={<GoogleCallback />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/account"
                    element={<AccountPage />}
                />
                <Route
                    path="/company"
                    element={<CompanyPage />}
                />
                <Route
                    path="/add-company"
                    element={<AddCompanyPage />}
                />
                <Route
                    path="/update-company"
                    element={<UpdateCompanyPage />}
                />
                <Route
                    path="/delete-company"
                    element={<DeleteCompanyPage />}
                />
                <Route
                    path="/transactions"
                    element={<TransactionPage />}
                />
                <Route
                    path="/manage-accounts"
                    element={<AccountsPage />}
                />
            </Routes>
        </>
    );
}

export default App


/*PS C:\Users\Ariel\Accounting-Front-End> git init
Reinitialized existing Git repository in C:/Users/Ariel/Accounting-Front-End/.git/
PS C:\Users\Ariel\Accounting-Front-End> git add .
>> git commit -m "Primer commit"
On branch master
nothing to commit, working tree clean
PS C:\Users\Ariel\Accounting-Front-End> git remote add origin https://github.com/guilariel/Accounting-Front-End.git                  
PS C:\Users\Ariel\Accounting-Front-End> git branch -M main
>> git push -u origin main                                                     
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 16 threads
Compressing objects: 100% (24/24), done.
Writing objects: 100% (24/24), 50.14 KiB | 6.27 MiB/s, done.
Total 24 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/guilariel/Accounting-Front-End.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\Ariel\Accounting-Front-End> */ 