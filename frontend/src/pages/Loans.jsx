import { useEffect, useState } from "react";
import { api } from "../src_export.js";
import Footer from "../components/Footer.jsx";

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
    <div className="bg-[#fdfaf7] min-h-screen flex flex-col">
      <div className="container py-10 flex-grow">
        <div className="card bg-white shadow-lg border border-[#d4a373] rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-5 text-[#6b4226]">
            My Loans
          </h2>

          <div className="space-y-4">
            {loans.map((l) => (
              <div
                key={l._id}
                className="flex items-center justify-between border border-[#d4a373] rounded-xl p-4 bg-[#fffaf5]"
              >
                <div>
                  <p className="font-medium text-[#4e2c16]">{l.book?.title}</p>
                  <p className="text-sm text-[#8c6e54]">
                    Due: {new Date(l.dueDate).toLocaleDateString()}{" "}
                    {l.returnedAt ? "· Returned" : ""}
                  </p>
                </div>
                {!l.returnedAt && (
                  <button
                    className="bg-[#6b4226] hover:bg-[#4e2c16] text-white px-4 py-2 rounded-lg shadow-md transition"
                    onClick={() => ret(l._id)}
                  >
                    Return
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
