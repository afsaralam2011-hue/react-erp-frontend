import { useState } from "react";
import axios from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const res = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      setSuccess("Account created successfully!");
      setTimeout(() => {
        window.location.href = "/"; // Go to login page
      }, 1500);
    } catch (err) {
      setError("Email already exists.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "30px",
        background: "#f5f7fa",
      }}
    >
      {/* LEFT BOX */}
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create New Account
        </h2>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        {success && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {success}
          </p>
        )}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "18px" }}>
            <label>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label>Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              value={email}
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
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#0c7c73ff",
              border: "none",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?{" "}
          <a
            href="/"
            style={{
              color: "#157a6dff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </a>
        </p>
      </div>

      {/* Right Side Panel */}
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
        <h1 style={{ marginTop: "100px", fontSize: "38px" }}>
          Welcome to Pakistan Wire Industries (Pvt.) LTD
        </h1>
        <p style={{ marginTop: "10px", fontSize: "17px" }}>
          Create your account to access the ERP Portal.
        </p>
      </div>
    </div>
  );
}
