import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // Reset form after submit
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="container my-5 py-5">
      <h2 className="text-center mb-4 display-6 fw-bold">Contact Us</h2>

      <form
        className="row justify-content-center g-3 shadow-lg p-4 rounded-4"
        style={{ backgroundColor: "#f8f9fa", maxWidth: "700px", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="col-md-6">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            className="form-control p-3"
            placeholder="Enter your name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className="col-md-6">
          <label className="form-label fw-semibold">Mobile Number</label>
          <input
            type="tel"
            className="form-control p-3"
            placeholder="Enter your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit mobile number"
            required
          />
        </div>

        {/* Email */}
        <div className="col-md-12">
          <label className="form-label fw-semibold">Email Address</label>
          <input
            type="email"
            className="form-control p-3"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="col-md-12">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className="form-control p-3"
            rows="5"
            placeholder="Write your message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn px-5 py-2 fw-semibold"
            style={{
              backgroundColor: "#b87333",
              color: "#fff",
              borderRadius: "30px",
            }}
          >
            Send Message
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <p className="text-success text-center mt-3 fw-semibold">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
