import { useEffect, useState } from "react";
import { api } from "../src_export.js";
import Footer from "../components/Footer.jsx";

export default function Books({ user }) {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");

  const load = async () => {
    const { data } = await api.get(
      `/books${q ? `?q=${encodeURIComponent(q)}` : ""}`
    );
    setBooks(data);
  };

  useEffect(() => {
    load();
  }, []);

  const borrow = async (bookId) => {
    try {
      await api.post(`/loans/borrow/${bookId}`);
      alert("Borrowed!");
      load();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to borrow");
    }
  };

  return (
    <div className="container py-8">
      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          className="w-full p-2 border rounded-md"
          style={{ backgroundColor: "#fdf5e6", borderColor: "#d2b48c" }} // light beige background
          placeholder="Search books..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded-md text-white font-semibold transition"
          style={{ backgroundColor: "#a0522d" }} // sienna brown
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#8b4513") // darker brown hover
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#a0522d")
          }
          onClick={load}
        >
          Search
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((b) => (
          <div
            key={b._id}
            className="p-4 rounded-lg shadow-md"
            style={{ backgroundColor: "#f5deb3" }} // wheat/light brown card
          >
            {/* Book Image */}
            <img
              src={b.image || "https://placehold.co/200x300?text=Book+Cover"}
              alt={b.title}
              className="w-full h-64 object-cover rounded-md mb-3"
            />

            <h3 className="font-semibold text-lg text-gray-900">{b.title}</h3>
            <p className="text-sm text-gray-700">by {b.author}</p>
            <p className="mt-2 text-sm">ISBN: {b.isbn || "—"}</p>
            <p className="text-sm">Available: {b.copies}</p>

            {user && (
              <button
                className="mt-3 w-full py-2 rounded-md text-white font-semibold transition"
                style={{ backgroundColor: "#d2b48c" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c19a6b")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d2b48c")
                }
                onClick={() => borrow(b._id)}
                disabled={b.copies <= 0}
              >
                {b.copies > 0 ? "Borrow" : "Unavailable"}
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
