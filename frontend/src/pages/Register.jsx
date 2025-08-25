import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../src_export.js";

export default function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/auth/register", { name, email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/");
    } catch (e) {
      setError(e.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0]">
      <div className="w-full max-w-md bg-[#fff7ed] shadow-lg rounded-2xl p-8 border border-[#e7d3c2]">
        <h1 className="text-3xl font-bold mb-4 text-[#6b4226] text-center">Register</h1>
        
        {error && <p className="text-red-600 mb-2">{error}</p>}
        
        <form onSubmit={submit} className="space-y-4">
          <input 
            className="w-full px-4 py-2 border border-[#d6bfae] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c19a6b] bg-[#fffaf6]" 
            placeholder="Name" 
            value={name} 
            onChange={e=>setName(e.target.value)} 
          />
          <input 
            className="w-full px-4 py-2 border border-[#d6bfae] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c19a6b] bg-[#fffaf6]" 
            placeholder="Email" 
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
          />
          <input 
            type="password"
            className="w-full px-4 py-2 border border-[#d6bfae] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c19a6b] bg-[#fffaf6]" 
            placeholder="Password" 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
          />
          <button 
            className="w-full py-2 bg-[#c19a6b] text-white font-semibold rounded-lg shadow-md hover:bg-[#a67c52] transition"
          >
            Create account
          </button>
        </form>
        
        <p className="mt-4 text-sm text-center text-[#6b4226]">
          Have an account?{" "}
          <Link to="/login" className="underline text-[#8b5e3c] hover:text-[#6b4226]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
