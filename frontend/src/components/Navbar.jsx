import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-[#f5f7ff] shadow-sm rounded-t-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-lg text-gray-900">
          📚 Library
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-gray-800 font-medium">
          <Link to="/books" className="hover:text-blue-600 transition">Books</Link>
          {user?.role === "admin" && (
            <Link to="/admin/books" className="hover:text-blue-600 transition">Admin</Link>
          )}
          {user && (
            <Link to="/loans" className="hover:text-blue-600 transition">My Loans</Link>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hover:text-blue-600">
            <Search className="w-5 h-5" />
          </button>

          {user ? (
            // Show profile avatar + logout
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-600">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {user.name?.charAt(0).toUpperCase() || <User className="w-5 h-5" />}
                </div>
                <span className="hidden sm:inline">{user.name}</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md hidden group-hover:block">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // If not logged in
            <>
              <Link 
                to="/login" 
                className="px-3 py-1 border rounded-md hover:bg-blue-100 transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
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
