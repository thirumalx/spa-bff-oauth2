import axios from "axios";

export default function Login() {
    const handleLogin = async () => {
        try {
            // Redirect to BFF login endpoint
            window.location.href = "http://localhost:9001/auth/login";
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with SAS</button>
        </div>
    );
}
