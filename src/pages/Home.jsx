import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prodRes = await axios.get("https://fakestoreapi.com/products");
        const catRes = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setProducts(prodRes.data);
        setCategories(catRes.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <p
        className="text-center mt-5"
        style={{ fontSize: "1.2rem", color: "#007bff" }}
      >
        Loading...
      </p>
    );

  return (
    <div style={{ background: "#fff", minHeight: "100vh", color: "#000" }}>
      {/* ---------------- Hero Carousel ---------------- */}
      <section className="mb-5">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div className="carousel-inner">
            {products.slice(0, 5).map((product, index) => (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={product.image}
                  className="d-block w-100"
                  alt={product.title}
                  style={{ height: "500px", objectFit: "cover" }}
                />

                {/* Caption */}
                <div
                  className="carousel-caption d-flex flex-column justify-content-center p-3"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    width: "90%",
                    maxWidth: "650px",
                  }}
                >
                  <h3 className="fw-bold text-dark fs-3 fs-md-2 fs-lg-1">
                    {product.title}
                  </h3>
                  <p className="fw-bold my-3 text-primary fs-4 fs-md-3 fs-lg-2">
                    ${product.price}
                  </p>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  {/* ---------------- Categories Section ---------------- */}
      <section className="mb-5 text-center">
        <h2 className="mb-4 fw-bold text-primary">Shop by Category</h2>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="card bg-primary text-white d-flex align-items-center justify-content-center"
              style={{
                width: "200px",
                height: "80px", // 🔽 reduced height
                borderRadius: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() => navigate(`/products?category=${cat}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,123,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h6 className="fw-bold text-capitalize mb-0">{cat}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Top Products Section ---------------- */}
      <section className="mb-5">
        <h2
          className="mb-4 text-center"
          style={{ fontWeight: "bold", color: "#007bff" }}
        >
          Top Products
        </h2>
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div
                className="card h-100 text-center shadow"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="fw-bold" style={{ color: "#007bff" }}>
                    ${product.price}
                  </p>
                  <button
                    className="btn bg-primary mt-auto"
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{
                      border: "none",
                      color: "#fff",
                      borderRadius: "25px",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- New Arrivals Section ---------------- */}
      <section className="mb-5">
        <h2
          className="mb-4 text-center"
          style={{ fontWeight: "bold", color: "#007bff" }}
        >
          New Arrivals
        </h2>
        <div className="row">
          {products.slice(6, 12).map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div
                className="card h-100 text-center shadow"
                style={{
                  borderRadius: "20px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="fw-bold" style={{ color: "#007bff" }}>
                    ${product.price}
                  </p>
                  <button
                    className="btn bg-primary mt-auto"
                    onClick={() => navigate(`/product/${product.id}`)}
                    style={{
                      border: "none",
                      color: "#fff",
                      borderRadius: "25px",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Testimonials Section ---------------- */}
      <section
        className="mb-5 py-5 text-center"
        style={{
          background: "#f8f9fa",
          borderRadius: "20px",
          border: "1px solid #e9ecef",
        }}
      >
        <h2 style={{ fontWeight: "bold", color: "#007bff" }}>
          What Our Customers Say
        </h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                borderRadius: "15px",
                padding: "1.5rem",
              }}
            >
              <p>"Amazing quality and fast shipping! Highly recommend."</p>
              <h6>- Alex Johnson</h6>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                borderRadius: "15px",
                padding: "1.5rem",
              }}
            >
              <p>"The best online shop I've ever used. Great variety!"</p>
              <h6>- Maria Garcia</h6>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={{
                borderRadius: "15px",
                padding: "1.5rem",
              }}
            >
              <p>"Stylish and affordable. Will shop again!"</p>
              <h6>- Liam Smith</h6>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- About Section ---------------- */}
      <section
        className="mb-5 py-5 text-center bg-primary text-white"
        style={{
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,123,255,0.3)",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Why Choose Us?</h2>
        <p
          className="mx-auto"
          style={{ maxWidth: "600px", fontSize: "1.1rem" }}
        >
          We provide the best products with top-notch quality and fast delivery.
          Join thousands of satisfied customers today!
        </p>
        <button
          className="btn btn-light mt-3"
          style={{
            borderRadius: "25px",
            fontWeight: "bold",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Learn More
        </button>
      </section>

      {/* ---------------- Newsletter Section ---------------- */}
      <section
        className="mb-5 py-5 text-center"
        style={{
          background: "#f8f9fa",
          borderRadius: "20px",
          border: "1px solid #e9ecef",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h3 style={{ fontWeight: "bold", color: "#007bff" }}>
          Join Our Newsletter
        </h3>
        <p style={{ fontSize: "1.1rem" }}>
          Get updates about new products and special offers
        </p>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            style={{
              maxWidth: "300px",
              borderRadius: "25px",
            }}
          />
          <button
            className="btn bg-primary"
            style={{
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
