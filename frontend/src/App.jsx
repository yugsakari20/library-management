import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Books from "./pages/Books.jsx";
import AdminBooks from "./pages/AdminBooks.jsx";
import Loans from "./pages/Loans.jsx";


function getUserFromToken() {
  const t = localStorage.getItem("token");
  if (!t) return null;
  try {
    const decoded = jwtDecode(t);
    // naive expiry check
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null;
    }
    // role is not in token; we fetch from localStorage shadow when login/register
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
}

export default function App() {
  const [user, setUser] = useState(getUserFromToken());

  useEffect(() => {
    // Keep user shadow for role persistence across reloads
    const handler = () => {
      const u = localStorage.getItem("user");
      setUser(u ? JSON.parse(u) : null);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const handleSetUser = (u) => {
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={
          <div className="container py-10">
            <div className="card">
              <h1 className="text-2xl font-semibold">Welcome to the Library 📚</h1>
              <p className="mt-2">Browse books, borrow and return, and manage inventory (admin).</p>
              <div className="mt-4 flex gap-3">
                <Link to="/books" className="btn btn-primary">Explore Books</Link>
                {user?.role === "admin" && <Link to="/admin/books" className="btn">Manage Books</Link>}
              </div>
            </div>
          </div>
        } />
        <Route path="/books" element={<Books user={user} />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={handleSetUser} />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register setUser={handleSetUser} />} />
        <Route path="/admin/books" element={user?.role === "admin" ? <AdminBooks /> : <Navigate to="/" />} />
        <Route path="/loans" element={user ? <Loans /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
