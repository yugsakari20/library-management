import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../src_export.js";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch (e) {
      setError(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container py-10">
      <div className="card max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <form onSubmit={submit} className="space-y-3">
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="btn btn-primary w-full">Login</button>
        </form>
        <p className="mt-3 text-sm">No account? <Link to="/register" className="underline">Register</Link></p>
      </div>
    </div>
  );
}
