import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your images
import gallery1 from "../img/lib1.jpg";
import gallery2 from "../img/lib1.jpg";
import gallery3 from "../img/lib1.jpg";

function Gallery() {
  return (
    <section className="container my-5 py-5">
      <h2 className="text-center mb-5 display-5 fw-bold">Gallery</h2>
      <div className="row justify-content-center g-4">
        <div className="col-md-4 col-sm-6">
          <div className="gallery-item">
            <img src={gallery1} alt="Library" className="img-fluid rounded-4" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery-item">
            <img src={gallery2} alt="Library" className="img-fluid rounded-4" />
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="gallery-item">
            <img src={gallery3} alt="Library" className="img-fluid rounded-4" />
          </div>
        </div>
      </div>

      {/* Extra CSS inside component */}
      <style jsx>{`
        .gallery-item {
          overflow: hidden;
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item img {
          transition: transform 0.5s ease;
          width: 100%;
          height: 300px; /* Bigger images */
          object-fit: cover; /* Prevent stretching */
          display: block;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default Gallery;
