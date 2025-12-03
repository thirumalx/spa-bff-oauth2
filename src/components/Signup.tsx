import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:9001/auth/signup", form, {
                withCredentials: true,
            });
            alert("Signup successful! Please login.");
        } catch (err) {
            console.error(err);
            alert("Signup failed.");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSignup} style={styles.form}>
                <h2 style={styles.title}>Create Account</h2>

                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <button type="submit" style={styles.button}>
                    Signup
                </button>
            </form>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
    },
    form: {
        width: "320px",
        background: "#2d2d2d",
        padding: "2rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    },
    title: {
        textAlign: "center",
        marginBottom: "1.5rem",
        color: "#fff",
    },
    input: {
        padding: "0.8rem",
        marginBottom: "1rem",
        borderRadius: "6px",
        border: "1px solid #555",
        background: "#1e1e1e",
        color: "#fff",
        fontSize: "1rem",
    },
    button: {
        padding: "0.8rem",
        borderRadius: "6px",
        border: "none",
        background: "#646cff",
        color: "#fff",
        fontSize: "1rem",
        cursor: "pointer",
        marginTop: "0.5rem",
    },
};
