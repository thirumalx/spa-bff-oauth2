import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:9001/api/user", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error("User not logged in", err);
        window.location.href = "/login";
      }
    }

    fetchUser();
  }, []);

  if (!user) return <p>Loading your dashboard…</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>Welcome, <b>{user.username}</b></p>

      <p>Email: {user.email}</p>

      <button onClick={() => {
        axios.post("http://localhost:9001/auth/logout", {}, { withCredentials: true })
          .then(() => (window.location.href = "/"));
      }}>
        Logout
      </button>
    </div>
  );
}
