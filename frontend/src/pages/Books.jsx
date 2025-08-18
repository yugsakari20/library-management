import { useEffect, useState } from "react";
import { api } from "../src_export.js";

export default function Books({ user }) {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");

  const load = async () => {
    const { data } = await api.get(`/books${q ? `?q=${encodeURIComponent(q)}` : ""}`);
    setBooks(data);
  };

  useEffect(() => { load(); }, []);

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
      <div className="flex gap-2 mb-4">
        <input className="input" placeholder="Search books..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn" onClick={load}>Search</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(b => (
          <div key={b._id} className="card">
            <h3 className="font-semibold text-lg">{b.title}</h3>
            <p className="text-sm text-gray-600">by {b.author}</p>
            <p className="mt-2 text-sm">ISBN: {b.isbn || "—"}</p>
            <p className="text-sm">Available: {b.copies}</p>
            {user && <button className="btn btn-primary mt-3" onClick={() => borrow(b._id)} disabled={b.copies<=0}>Borrow</button>}
          </div>
        ))}
      </div>
    </div>
  );
}
