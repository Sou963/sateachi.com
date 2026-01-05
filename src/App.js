import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Products from "./pages/Product";
import Home from "./pages/Home";
import Footer from "./components/footer.jsx";
import About from "./pages/About.jsx";
import ProductView from "./pages/Product_view.jsx";
import LoginRegister from "./pages/login_reg.jsx";
import BuyNowForm from "./components/buy_from.jsx";
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

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
