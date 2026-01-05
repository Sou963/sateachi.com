import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Read category from URL
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  // 🔹 API URL based on category
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  if (loading)
    return (
      <p className="text-center mt-5 fs-4 text-primary">
        Loading products...
      </p>
    );

  return (
    <div className="container my-5">
      {/* 🔹 Page Title */}
      <h2 className="text-center mb-4 fw-bold text-primary">
        {category ? category.toUpperCase() : "ALL PRODUCTS"}
      </h2>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "250px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.title}</h6>
                <p className="fw-bold text-primary">${product.price}</p>

                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="btn btn-primary mt-auto rounded-pill"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
