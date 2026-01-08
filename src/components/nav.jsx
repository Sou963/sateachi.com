import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user info
    setUser(null);
    navigate("/auth"); // redirect to login page
  };

  // Get first two letters of user name
  const userInitials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

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
            {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Products", path: "/products" }].map((link) => (
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

            {/* Login / Register / User */}
            {user ? (
              <li className="nav-item d-flex align-items-center ms-2">
                <span
                  className="nav-link rounded-circle text-center me-2"
                  style={{
                    background: "#ffd700",
                    color: "#000",
                    fontWeight: "bold",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  title={user.name}
                >
                  {userInitials}
                </span>
                <button
                  className="btn btn-sm btn-outline-light mx-2 t-3"
                  onClick={handleLogout}
                >
                  <b>Logout</b>
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item ms-2">
                  <NavLink
                    to="/auth"
                    className="nav-link"
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "rgba(255,215,0,0.2)",
                      border: "1px solid rgba(255,215,0,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item ms-2">
                  <NavLink
                    to="/auth"
                    className="nav-link"
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "rgba(0,255,0,0.2)",
                      border: "1px solid rgba(0,255,0,0.3)",
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
