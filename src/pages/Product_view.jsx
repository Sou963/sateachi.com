import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-5 fs-4">Loading...</p>;

  return (
    <div className="container my-5">
      <div className="row align-items-center g-4">
        {/* Image */}
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-2">{product.title}</h2>

          <p className="text-muted text-capitalize mb-2">
            {product.category}
          </p>

          <h3 className="text-primary fw-bold mb-3">
            ${product.price}
          </h3>

          <p className="text-secondary lh-lg text-justify">
            {product.description}
          </p>

          <div className="mt-4">
            <a href="/buy" className="btn btn-primary btn-lg rounded-pill w-100">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
