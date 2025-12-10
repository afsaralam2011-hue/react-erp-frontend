import { useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill out this field.");
      return;
    }

    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard"; // redirect to dashboard
    } catch (err) {
      setError("Invalid Login. Try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "60px 30px",
        background: "#f5f7fa",
      }}
    >
      {/* LEFT LOGIN BOX */}
      <div
        style={{
          width: "45%",
          background: "#fff",
          margin: "auto",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* LOGO SPACE */}
        <div
          style={{
            width: "120px",
            height: "120px",
            background: "#e0e0e0",
            borderRadius: "50%",
            margin: "0 auto 20px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: "#777",
          }}
        >
          PWI
        </div>

        <h2 style={{ marginBottom: "15px", textAlign: "center" }}>
          Login to ERP System
        </h2>

        {error && (
          <p style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "18px" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="jane@example.com"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                placeholder="••••••"
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
              <span
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "13px",
                  color: "#555",
                }}
              >
                {showPass ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              background: "#2e7d32",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>

        {/* Create Account Link */}
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          New user?{" "}
          <Link
            to="/register"
            style={{
              color: "#157a6dff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* RIGHT SIDE GREEN PANEL */}
      <div
        style={{
          width: "50%",
          background: "#0c7c73ff",
          borderRadius: "25px",
          margin: "auto",
          color: "white",
          padding: "55px",
        }}
      >
        <h1 style={{ marginTop: "100px", fontSize: "40px" }}>
          Welcome to Pakistan Wire Industries (Pvt.) LTD
        </h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Use your credentials to access the system.
        </p>
      </div>
    </div>
  );
}
