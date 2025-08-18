import { useEffect, useState } from "react";
import { api } from "../src_export.js";

export default function Loans() {
  const [loans, setLoans] = useState([]);

  const load = async () => {
    const { data } = await api.get("/loans");
    setLoans(data);
  };

  useEffect(() => { load(); }, []);

  const ret = async (id) => {
    await api.post(`/loans/return/${id}`);
    load();
  };

  return (
    <div className="container py-8">
      <div className="card">
        <h2 className="text-xl font-semibold mb-3">My Loans</h2>
        <div className="space-y-3">
          {loans.map(l => (
            <div key={l._id} className="flex items-center justify-between border rounded-xl p-3">
              <div>
                <p className="font-medium">{l.book?.title}</p>
                <p className="text-sm text-gray-600">Due: {new Date(l.dueDate).toLocaleDateString()} {l.returnedAt ? "· Returned" : ""}</p>
              </div>
              {!l.returnedAt && <button className="btn" onClick={() => ret(l._id)}>Return</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
