import React, { useState } from "react";

export default function BuyNowForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    // Here you can integrate with payment gateway or API
    alert(
      `Thank you ${form.name}! \nYour order of ${form.quantity} product(s) will be delivered to ${form.address}.`
    );
    // Reset form
    setForm({ name: "", email: "", address: "", quantity: 1 });
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg rounded-4 p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Buy Now</h2>
        <form onSubmit={handleBuyNow}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control form-control-lg"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              className="form-control form-control-lg"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              min={1}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg rounded-pill">
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
