import React, { useState } from "react";
import axios from "axios";

export default function LoginRegister() {
  const [tab, setTab] = useState("signup");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const API = "https://backend-for-shateaci.vercel.app/api/auth";

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tab === "signup" && form.password !== form.confirm) {
      return alert("Password does not match");
    }

    try {
      setLoading(true);

      if (tab === "signup") {
        const res = await axios.post(`${API}/register`, {
          name: form.email.split("@")[0],
          email: form.email,
          password: form.password,
        });

        alert(res.data.message);
        setTab("login");
      } else {
        const res = await axios.post(`${API}/login`, {
          email: form.email,
          password: form.password,
        });

        alert("Login successful");

        // example: save user
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      setForm({ email: "", password: "", confirm: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const passwordRules = [
    { id: "upper", label: "At least one capital letter", test: (pw) => /[A-Z]/.test(pw) },
    { id: "lower", label: "At least one small letter", test: (pw) => /[a-z]/.test(pw) },
    { id: "number", label: "At least one number", test: (pw) => /[0-9]/.test(pw) },
    { id: "special", label: "At least one special character", test: (pw) => /[!@#$%^&*(),.?\":{}|<>]/.test(pw) },
    { id: "length", label: "Between 8 and 30 characters", test: (pw) => pw.length >= 8 },
  ];

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left */}
      <div className="d-none d-md-flex col-md-6 align-items-center justify-content-center bg-light">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c9932738420671.576129995a487.gif"
          alt="Avatar"
          className="img-fluid"
        />
      </div>

      {/* Right */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="w-100 px-3" style={{ maxWidth: "400px" }}>
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4 justify-content-center">
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${tab === "login" ? "active" : ""}`}
                onClick={() => setTab("login")}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link ${tab === "signup" ? "active" : ""}`}
                onClick={() => setTab("signup")}
              >
                Sign Up
              </button>
            </li>
          </ul>

          <h2 className="text-center mb-4">{tab === "login" ? "Login" : "Sign Up"}</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {tab === "signup" && (
              <>
                <ul className="small text-muted">
                  {passwordRules.map((r) => (
                    <li key={r.id} className={r.test(form.password) ? "text-success" : ""}>
                      {r.label}
                    </li>
                  ))}
                </ul>

                <div className="mb-3">
                  <input
                    type="password"
                    name="confirm"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={form.confirm}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="d-grid">
              <button disabled={loading} className="btn btn-primary btn-lg">
                {loading ? "Please wait..." : tab === "login" ? "Login" : "Create Account"}
              </button>
            </div>
          </form>

          <p className="text-center mt-3 small text-muted">
            By continuing you agree to our terms and privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
