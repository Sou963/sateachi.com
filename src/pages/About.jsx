// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div
      style={{
        background: "#f8f9fa", // light background
        minHeight: "100vh",
        color: "#212529", // dark text for contrast
        paddingBottom: "50px",
      }}
    >
      {/* Hero Section */}
      <section
        className="text-center py-5 mb-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          borderRadius: "0 0 50% 50% / 0 0 10% 10%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 className="display-4 fw-bold mb-3" style={{ textShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
          About MyShop
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
          MyShop is your ultimate destination for quality products. We combine the latest trends with exceptional service to provide a seamless shopping experience. <br /><br />
          Founded in 2020, we have grown to serve thousands of happy customers worldwide. Our goal is to make online shopping easy, enjoyable, and rewarding. From electronics to fashion, home decor to personal care, we carefully curate each product to ensure the highest quality and value for our customers.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div
              className="card bg-white border-0 p-4 h-100 shadow-sm"
              style={{ borderRadius: "20px", transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 className="fw-bold text-primary mb-3">Our Mission</h3>
              <p>
                We strive to deliver high-quality products that our customers love. Our mission is to combine affordability, quality, and top-notch service. <br /><br />
                We believe shopping should be simple, trustworthy, and enjoyable, and we work tirelessly to exceed expectations at every step.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card bg-white border-0 p-4 h-100 shadow-sm"
              style={{ borderRadius: "20px", transition: "transform 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 className="fw-bold text-primary mb-3">Our Vision</h3>
              <p>
                To be the most trusted online store where customers feel confident, satisfied, and valued every time they shop with us. <br /><br />
                We aim to continuously innovate, improve our services, and expand our product offerings while keeping customer happiness as our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container text-center mb-5">
        <h2 className="fw-bold display-6 mb-4 text-primary" style={{ textShadow: "0 0 10px rgba(102,126,234,0.2)" }}>
          Meet Our Team
        </h2>
        <div className="row g-4">
          {["Alex Johnson", "Maria Garcia", "Liam Smith", "Sophia Lee"].map((member, i) => (
            <div key={i} className="col-md-3">
              <div
                className="card bg-white border-0 shadow-sm p-4"
                style={{ borderRadius: "20px", transition: "transform 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div
                  className="rounded-circle bg-primary mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px", fontSize: "2rem", color: "#fff" }}
                >
                  {member.split(" ").map(n => n[0]).join("")}
                </div>
                <h5 className="fw-bold text-primary">{member}</h5>
                <p className="mb-0">Team Member</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-3 text-primary" style={{ textShadow: "0 0 10px rgba(102,126,234,0.2)" }}>
          Join Our Journey
        </h2>
        <p className="mb-4">
          Discover amazing products, enjoy exclusive deals, and experience shopping like never before. <br /><br />
          At MyShop, every customer is part of our family. Explore our store and find products you'll love!
        </p>
        <button
          className="btn btn-primary btn-lg fw-bold px-4 py-2"
          style={{ borderRadius: "25px", transition: "transform 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;
