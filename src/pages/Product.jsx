import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "250px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">${product.price}</p>
              <button onClick={() => navigate(`/product/${product.id}`)} className="btn btn-primary mt-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
