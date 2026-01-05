import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            color: "#fff",
          }}
        >
          <span style={{ marginRight: "0.5rem" }}>🛍️</span> SatheAci.com
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-lg-start">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Login", path: "/auth" },
            ].map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.name === "Home"}
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#ffd700" : "#fff",
                    fontWeight: 500,
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  })}
                  onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
                  onMouseLeave={(e) => (e.target.style.background = "transparent")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Register as special button */}
            <li className="nav-item">
              <a
                href="/auth"
                className="nav-link"
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "rgba(255,215,0,0.2)",
                  border: "1px solid rgba(255,215,0,0.3)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.background = "rgba(255,215,0,0.4)")}
                onMouseLeave={(e) => (e.target.style.background = "rgba(255,215,0,0.2)")}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
