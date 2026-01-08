import React, { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("https://backend-for-shateaci.vercel.app/api/payment");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
        alert("Error fetching orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: "#e84393" }}>
        All Orders 
      </h1>

      {loading ? (
        <p className="text-center">Loading orders...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-primary">
              <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Buyer Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.productName || "Test Product"}</td>
                    <td>{order.quantity}</td>
                    <td>{order.name || order.buyerName}</td>
                    <td>{order.email || order.buyerEmail}</td>
                    <td>{order.address || order.buyerAddress}</td>
                    <td>{order.paymentMethod || "Online"}</td>
                    <td className={`fw-bold`}>
                      {order.status}
                    </td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
