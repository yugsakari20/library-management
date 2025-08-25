import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="py-5" style={{ fontSize: "1.1rem" }}>
      <Container>
        <Row className="align-items-center">
          {/* Map Section */}
          <Col md={6} className="mb-5 mb-md-0">
            <iframe
              title="office-location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.8408%2C21.186%2C72.8508%2C21.196&amp;layer=mapnik"
              style={{ border: "0", width: "100%", height: "450px", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col>

          {/* Contact Details Section */}
          <Col md={6}>
            <div className="mb-5 d-flex">
              <FaMapMarkerAlt style={{ color: "brown", fontSize: "2rem" }} className="me-3" />
              <div>
                <h4 className="fw-bold">Our Office Address</h4>
                <p>area, city, landmark, pincode</p>
              </div>
            </div>

            <div className="mb-5 d-flex">
              <FaEnvelope style={{ color: "brown", fontSize: "2rem" }} className="me-3" />
              <div>
                <h4 className="fw-bold">General Enquiries</h4>
                <p>sample@example.com</p>
              </div>
            </div>

            <div className="mb-5 d-flex">
              <FaPhoneAlt style={{ color: "brown", fontSize: "2rem" }} className="me-3" />
              <div>
                <h4 className="fw-bold">Call Us</h4>
                <p>+91-1111111111</p>
              </div>
            </div>

            <div className="mb-5 d-flex">
              <FaClock style={{ color: "brown", fontSize: "2rem" }} className="me-3" />
              <div>
                <h4 className="fw-bold">Our Timing</h4>
                <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
