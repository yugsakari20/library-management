import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../img/lib1.jpg";

function AboutUs() {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="text-center mb-4 display-5 fw-bold">About Us</h2>
          <p className="text-muted text-center fs-5">
            Learning is a lifetime journey. To make this journey enjoyable, we,
            dummy company, situated at area, city, state, provide an extensive
            list of books that you will find informative and mind-changing all
            at once. Reading is the best way to pass time and what better way
            than to borrow/purchase books from our library and liberate your
            mind altogether.
          </p>
          <p className="text-muted text-center fs-5">
            We provide a safe, comfortable and friendly environment that enables
            learning and advancement of knowledge, and promotes discovery and
            scholarship. Sit down with a cup of coffee and unwind at our book
            store with a book of your choice!
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={aboutImg}
            alt="Library"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "520px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
