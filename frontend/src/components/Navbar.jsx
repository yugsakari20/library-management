import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

export default function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#f5deb3] shadow-sm rounded-t-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-lg text-gray-900">
          📚 Library
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-gray-800 font-medium">
          <Link to="/" className="hover:text-[#8b4513] transition">Home</Link>
          <Link to="/books" className="hover:text-[#8b4513] transition">Books</Link>
          {user?.role === "admin" && (
            <Link to="/admin/books" className="hover:text-[#8b4513] transition">Admin</Link>
          )}
          {user && (
            <Link to="/loans" className="hover:text-[#8b4513] transition">My Loans</Link>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hover:text-[#8b4513]">
            <Search className="w-5 h-5" />
          </button>

          {user ? (
            // Logged-in user (Profile + Dropdown)
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 hover:text-[#8b4513]"
              >
                <div className="w-8 h-8 rounded-full bg-[#d2b48c] text-white flex items-center justify-center font-semibold">
                  {user.name?.charAt(0).toUpperCase() || <User className="w-5 h-5" />}
                </div>
                <span className="hidden sm:inline">{user.name}</span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#fffaf0] border border-[#deb887] rounded-md shadow-md">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-[#f5deb3]"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-[#f5deb3]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Not logged in
            <>
              <Link 
                to="/login" 
                className="px-3 py-1 border border-[#d2b48c] rounded-md hover:bg-[#fdf5e6] transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-3 py-1 bg-[#d2b48c] text-white rounded-md hover:bg-[#c19a6b] transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
