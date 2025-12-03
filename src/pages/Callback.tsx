import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Callback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const state = params.get("state");

        if (!code) {
            console.error("No authorization code present");
            return;
        }

        async function exchangeCode() {
            try {
                await axios.post("http://localhost:9001/auth/callback", {
                    code,
                    state,
                }, {
                    withCredentials: true,
                });

                navigate("/dashboard");
            } catch (error) {
                console.error("Error exchanging code:", error);
                alert("Authentication failed");
            }
        }

        exchangeCode();
    }, [navigate]);

    return <p>Completing login…</p>;
}
