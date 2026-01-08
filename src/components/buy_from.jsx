import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BuyNowForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBuyNow = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://backend-for-shateaci.vercel.app/api/orders", form);

      if (res.data.success) {
        navigate("/payment", {
          state: {
            orderId: res.data.orderId,
            order: form,
          },
        });
      }
    } catch (error) {
      alert("Order failed");
      console.error(error);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: 450 }}>
        <h3 className="text-center mb-3">Buy Now</h3>

        <form onSubmit={handleBuyNow}>
          <input className="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} required />
          <input className="form-control mb-3" name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input className="form-control mb-3" name="address" placeholder="Address" onChange={handleChange} required />
          <input className="form-control mb-3" name="quantity" type="number" min="1" onChange={handleChange} required />

          <button className="btn btn-primary w-100">Buy Now</button>
        </form>
      </div>
    </div>
  );
}
