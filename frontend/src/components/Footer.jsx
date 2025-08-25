import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ color: "#A0522D" }} className="bg-light pt-5">
      <Container>
        <Row className="mb-5">
          {/* Useful Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">USEFUL LINKS</h5>
            <ul className="list-unstyled fs-6">
              <li className="mb-2">PRIVACY POLICY</li>
              <li className="mb-2">SERVICES</li>
              <li className="mb-2">GALLERY</li>
              <li className="mb-2">TESTIMONIALS</li>
            </ul>
          </Col>

          {/* Pages */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">PAGES</h5>
            <ul className="list-unstyled fs-6">
              <li className="mb-2">HOME</li>
              <li className="mb-2">ABOUT</li>
              <li className="mb-2">VIDEOS</li>
              <li className="mb-2">CONTACT US</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">CONTACT</h5>
            <p className="mb-2 fs-6">+91 1111111111</p>
            <p className="mb-2 fs-6">sample@example.com</p>
          </Col>

          {/* Social Media */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">CONNECT</h5>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fs-5"
                style={{ width: "40px", height: "40px" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fs-5"
                style={{ width: "40px", height: "40px" }}
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fs-5"
                style={{ width: "40px", height: "40px" }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fs-5"
                style={{ width: "40px", height: "40px" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle fs-6"
                style={{ width: "40px", height: "40px" }}
              >
                Jd
              </a>
            </div>
          </Col>
        </Row>

        <hr />

        {/* Bottom Row */}
        <Row className="text-center mb-3">
          <Col md={12}>
            <p className="mb-1 fs-6">
              © Copyrights 2025. Ison besn e. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Language Bar */}
      <div className="py-3 text-center fs-6" style={{ backgroundColor: "#A0522D", color: "white" }}>
        <p className="mb-0">
          CHANGE LANGUAGE : English &nbsp; हिंदी &nbsp; मराठी &nbsp; বাংলা &nbsp;
          தமிழ் &nbsp; ગુજરાતી &nbsp; ಕನ್ನಡ &nbsp; മലയാളം &nbsp; తెలుగు &nbsp;
          ਪੰਜਾਬੀ
        </p>
      </div>
    </footer>
  );
}

export default Footer;
