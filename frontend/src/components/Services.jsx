// src/components/Services.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import img1 from "../img/img1.jpg";
import img2 from "../img/img1.jpg";
import img3 from "../img/img1.jpg";
import img4 from "../img/img1.jpg";

const services = [
  {
    title: "Silent Reading",
    desc: "One needs silence to read books or to study, our library has special arrangements for the silence zone.",
    img: img1,
  },
  {
    title: "Book Rentals",
    desc: "Apart from reading inside the library, we also provide facility to rent and return the books in time.",
    img: img2,
  },
  {
    title: "Ambience and Infrastructure",
    desc: "Modern infrastructure, air-conditioned, sound proof, state-of-the-art classrooms that foster learning.",
    img: img3,
  },
  {
    title: "Categorized Book Collection",
    desc: "We have excellent collection of books categorized under children, fiction, cookbooks etc for easy access.",
    img: img4,
  },
];

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold display-4">Our Services</h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="h-100 shadow-lg border-0 text-center" style={{ borderRadius: "25px", overflow: "hidden" }}>
              <div style={{ overflow: "hidden", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
                <Card.Img
                  variant="top"
                  src={service.img}
                  style={{
                    height: "300px", // Bigger image
                    objectFit: "cover",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.filter = "brightness(0.9)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between p-4">
                <div>
                  <Card.Title className="fw-bold" style={{ fontSize: "22px", marginBottom: "15px" }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "16px", minHeight: "100px" }}>
                    {service.desc}
                  </Card.Text>
                </div>
                <Button
                  className="fw-semibold mt-3 py-2 px-4"
                  style={{
                    backgroundColor: "#8B4513", // Brown
                    borderColor: "#8B4513",
                    fontSize: "16px",
                    borderRadius: "12px",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#5c2c0a"; // Darker brown
                    e.target.style.borderColor = "#5c2c0a";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#8B4513";
                    e.target.style.borderColor = "#8B4513";
                  }}
                >
                  Enquire Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
