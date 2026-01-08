import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Products from "./pages/Product";
import Home from "./pages/Home";
import Footer from "./components/footer.jsx";
import About from "./pages/About.jsx";
import ProductView from "./pages/Product_view.jsx";
import LoginRegister from "./pages/login_reg.jsx";
import BuyNowForm from "./components/buy_from.jsx";
import Payment from "./components/Payment.jsx"
import PaymentSuccess from "./components/pay_success.jsx";
import Show_orders from "./pages/abmin_show_order.jsx";
import AdminOrders from "./pages/ad_online_pay.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/buy" element={<BuyNowForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/show_orders" element={<Show_orders />} />
          <Route path="/online_payment" element={<AdminOrders />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
