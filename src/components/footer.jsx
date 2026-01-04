// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // same as navbar
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        color: "#fff",
        borderRadius: "20px 20px 0 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              MyShop
            </h5>
            <p style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
              Your go-to destination for quality products. Explore a wide range of items with fast shipping and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Products", "Contact", "FAQ"].map((link, i) => (
                <li key={i} className="mb-2">
                  <a
                    href="#"
                    style={{ color: "#fff", textDecoration: "none", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              Follow Us
            </h5>
            <div className="d-flex gap-3">
              {["📘", "🐦", "📷", "💼"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    color: "#fff",
                    fontSize: "1.8rem",
                    transition: "transform 0.3s, color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.3)";
                    e.target.style.color = "#ffd700";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.color = "#fff";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="mt-3" style={{ fontSize: "0.9rem" }}>
              Stay connected for the latest updates!
            </p>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

        {/* Footer Bottom */}
        <div className="text-center mt-3" style={{ fontSize: "0.85rem" }}>
          &copy; 2023 MyShop. All rights reserved. |{" "}
          <a
            href="#"
            style={{ color: "#ffd700", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            style={{ color: "#ffd700", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
