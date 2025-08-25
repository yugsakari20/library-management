import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import bookshelf from "../img/img4.jpg";
import img1 from "../img/img2.png";
import img2 from "../img/img3.jpg";

const BooksSection = () => {
  return (
    <div
      className="books-section"
      style={{
        background: "#fafafa",
        padding: "80px 0", // Bigger section height
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Slider */}
          <Col md={6} className="text-center">
            <Carousel fade interval={3000} className="shadow-lg rounded-4">
              <Carousel.Item>
                <img
                  src={bookshelf}
                  alt="Bookshelf"
                  className="d-block w-100 rounded-4"
                  style={{
                    maxHeight: "500px", // Bigger image
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img1}
                  alt="Books Collection"
                  className="d-block w-100 rounded-4"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={img2}
                  alt="Library"
                  className="d-block w-100 rounded-4"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Right Side - Text + Button */}
          <Col
            md={6}
            className="text-center text-md-start mt-4 mt-md-0 d-flex flex-column justify-content-center"
          >
            <h2
              className="fw-bold mb-3"
              style={{ color: "#3e2723", fontSize: "3rem", lineHeight: "1.2" }}
            >
              Find Exclusive Range of Books
            </h2>
            <h4
              className="text-muted mb-4"
              style={{ fontSize: "1.75rem" }}
            >
              At Our Library
            </h4>
            <Button
              size="lg"
              className="px-5 py-3 rounded-pill shadow"
              style={{
                backgroundColor: "#795548", // Brown color
                borderColor: "#5d4037",
                color: "#fff",
                fontSize: "1.3rem", // Bigger button text
              }}
            >
              Enquire Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BooksSection;
