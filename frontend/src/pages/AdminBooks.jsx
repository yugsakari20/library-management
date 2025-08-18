import { useEffect, useState } from "react";
import { api } from "../src_export.js";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", isbn: "", copies: 1 });

  const load = async () => {
    const { data } = await api.get("/books");
    setBooks(data);
  };

  useEffect(() => { load(); }, []);

  const save = async (e) => {
    e.preventDefault();
    await api.post("/books", form);
    setForm({ title: "", author: "", isbn: "", copies: 1 });
    load();
  };

  const del = async (id) => {
    if (!confirm("Delete book?")) return;
    await api.delete(`/books/${id}`);
    load();
  };

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-3">Add Book</h2>
          <form onSubmit={save} className="space-y-2">
            <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
            <input className="input" placeholder="Author" value={form.author} onChange={e=>setForm({...form, author: e.target.value})} />
            <input className="input" placeholder="ISBN" value={form.isbn} onChange={e=>setForm({...form, isbn: e.target.value})} />
            <input className="input" type="number" placeholder="Copies" value={form.copies} onChange={e=>setForm({...form, copies: Number(e.target.value)})} />
            <button className="btn btn-primary w-full">Save</button>
          </form>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-3">Books</h2>
          <div className="space-y-3">
            {books.map(b => (
              <div key={b._id} className="flex items-center justify-between border rounded-xl p-3">
                <div>
                  <p className="font-medium">{b.title}</p>
                  <p className="text-sm text-gray-600">{b.author} · {b.isbn || "—"} · {b.copies} copies</p>
                </div>
                <button className="btn" onClick={() => del(b._id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
