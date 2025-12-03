import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Welcome to SPA BFF OAuth2</h1>
            <p>Please login or signup to continue.</p>

            <div style={{ marginTop: "1rem" }}>
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="/signup">
                    <button style={{ marginLeft: "1rem" }}>Signup</button>
                </Link>
            </div>
        </div>
    );
}
