import { Routes, Route } from "react-router-dom";
import { CallbackPage, LogInPage } from "./pages/LogInPage";
import { Home } from "./pages/Home";
import { UserProvider } from "./provider/UserProvider";
import { AccountPage } from "./pages/AccountPage";

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route
                    path="/"
                    element={<LogInPage />}
                />

                <Route
                    path="/auth-success"
                    element={<CallbackPage />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/account"
                    element={<AccountPage />}
                />
            </Routes>
        </UserProvider>
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