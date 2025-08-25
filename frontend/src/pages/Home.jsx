import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BooksSection from "../components/Bookshelf";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home({ user }) {
  return (
    <>
      <div className="container my-5">
        {/* Welcome Section */}
        <div
          className="p-5 rounded-4 shadow-lg mb-5 border border-3"
          style={{
            backgroundColor: "#fff7ed", // light cream
            borderColor: "#e7d3c2", // soft brown border
          }}
        >
          <h1 className="display-5 fw-bold text-center" style={{ color: "#6b4226" }}>
            Welcome to the Library 📚
          </h1>
          <p className="fs-4 text-center" style={{ color: "#8b5e3c" }}>
            Your journey to knowledge begins here.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
            <Link
              to="/books"
              className="btn btn-lg px-4 me-sm-2 fw-semibold shadow"
              style={{
                backgroundColor: "#c19a6b",
                color: "white",
                borderRadius: "0.5rem",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a67c52")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#c19a6b")}
            >
              Explore Books
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin/books"
                className="btn btn-lg px-4 fw-semibold"
                style={{
                  backgroundColor: "transparent",
                  color: "#6b4226",
                  border: "2px solid #c19a6b",
                  borderRadius: "0.5rem",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#c19a6b";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#6b4226";
                }}
              >
                Manage Books
              </Link>
            )}
          </div>
        </div>

        {/* Other Sections */}
        <BooksSection />
        <Services />
        <AboutUs />
        <Gallery />
        <ContactForm />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
