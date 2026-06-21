export function getToken(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    return token;
}

export function getEmail(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    return email;
}  

export function clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
}  

export function saveAuthData(token: string, email: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
}