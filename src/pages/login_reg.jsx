import React, { useState } from "react";

export default function LoginRegister() {
  const [tab, setTab] = useState("signup");
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(tab === "login" ? "Logging in (demo)" : "Signing up (demo)");
  };

  const passwordRules = [
    { id: "upper", label: "At least one capital letter", test: (pw) => /[A-Z]/.test(pw) },
    { id: "lower", label: "At least one small letter", test: (pw) => /[a-z]/.test(pw) },
    { id: "number", label: "At least one number", test: (pw) => /[0-9]/.test(pw) },
    { id: "special", label: "At least one special character", test: (pw) => /[!@#$%^&*(),.?\":{}|<>+\-_=;\\[\]\/`~]/.test(pw) },
    { id: "length", label: "Between 8 and 30 characters", test: (pw) => pw.length >= 8 && pw.length <= 30 },
  ];

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left side - Avatar */}
      <div className="d-none d-md-flex col-md-6 align-items-center justify-content-center bg-light">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c9932738420671.576129995a487.gif"
          alt="Avatar"
          className="img-fluid h-auto w-auto"
        />
      </div>

      {/* Right side - Form */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div className="w-100 px-3" style={{ maxWidth: "400px" }}>
          {/* Logo */}
          {/* <div className="text-center mb-4">
            <img
              src=""
              alt="Logo"
              className="img-fluid mb-2"
              style={{ maxWidth: "150px" }}
            />
            <div className="small text-muted">en | pt | es</div>
          </div> */}

          {/* Tabs */}
          <ul className="nav nav-tabs mb-4 justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${tab === "login" ? "active" : ""}`}
                onClick={() => setTab("login")}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${tab === "signup" ? "active" : ""}`}
                onClick={() => setTab("signup")}
              >
                Sign Up
              </button>
            </li>
          </ul>

          {/* Form Title */}
          <h2 className="text-center mb-4">{tab === "login" ? "Login" : "Sign Up"}</h2>

          {/* Form */}
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

            {/* Password rules for signup */}
            {tab === "signup" && (
              <>
                <ul className="text-muted small mb-3">
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

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="humanCheck" />
                  <label className="form-check-label" htmlFor="humanCheck">
                    I am human
                  </label>
                </div>
              </>
            )}

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg">
                {tab === "login" ? "Login to your account" : "Create new account"}
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
