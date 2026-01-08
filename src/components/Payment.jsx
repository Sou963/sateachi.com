import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
  if (!state?.order) return alert("No order data!");
  setLoading(true);

  try {
    const res = await fetch("https://backend-for-shateaci.vercel.app/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.order),
    });

    const data = await res.json();

    if (data.success) {
      // Redirect to SSLCommerz
      window.location.href = data.GatewayPageURL;
    } else {
      alert("Order failed!");
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>

      <p><b>Order ID:</b> {state?.orderId}</p>
      <p><b>Name:</b> {state?.order?.name}</p>
      <p><b>Quantity:</b> {state?.order?.quantity}</p>

      <button
        className="btn btn-primary mt-3"
        onClick={handleBuyNow}
        disabled={loading}
      >
        {loading ? "Processing..." : "Buy Now / Pay Online"}
      </button>

      <button
        className="btn btn-success mt-3 ms-2"
        onClick={() => alert("Cash on Delivery selected!")}
      >
        Cash on Delivery
      </button>
    </div>
  );
}
