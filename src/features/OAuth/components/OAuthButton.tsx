export function LoginButton() {
    return (
        <div>
            <button  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg" onClick={LogInWithGoogle}>
                Log In
            </button>
        </div>
    );
}

export function LogInWithGoogle() {
    window.location.href = "http://localhost:5070/auth/login";
}