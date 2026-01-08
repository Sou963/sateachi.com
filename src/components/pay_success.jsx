import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "500px", width: "100%" }}>
        {/* Success Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="green"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08 0l3.992-3.992a.75.75 0 0 0-1.06-1.06L7.5 9.439 5.53 7.47a.75.75 0 1 0-1.06 1.06l2.5 2.5z" />
          </svg>
        </div>

        <h2 className="text-success mb-3">Payment Successful!</h2>
        <p className="mb-4">Thank you for your purchase. Your payment has been processed successfully.</p>

        <button className="btn btn-primary btn-lg w-100" onClick={handleGoHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
}
