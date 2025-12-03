import axios from "axios";

export default function Consent() {
    const approve = async () => {
        await axios.post(
            "http://localhost:9001/auth/consent",
            { approved: true },
            { withCredentials: true }
        );
        window.location.href = "/callback-after-consent";
    };

    const reject = async () => {
        await axios.post(
            "http://localhost:9001/auth/consent",
            { approved: false },
            { withCredentials: true }
        );
        window.location.href = "/consent-denied";
    };

    return (
        <div>
            <h2>Consent Required</h2>
            <p>This app wants access to your profile information.</p>

            <button onClick={approve}>Allow</button>
            <button onClick={reject}>Deny</button>
        </div>
    );
}
