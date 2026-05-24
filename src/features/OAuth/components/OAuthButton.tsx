export function LoginButton() {
    return (
        <div>
            <button onClick={LogInWithGoogle}>
                Log In
            </button>
        </div>
    );
}

export function LogInWithGoogle() {
    window.location.href = "http://localhost:5070/auth/login";
}