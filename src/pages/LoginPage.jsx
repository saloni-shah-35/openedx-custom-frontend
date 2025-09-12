import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    alert("Login functionality would be implemented here!");
  };

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "60px auto", 
      padding: "0 24px" 
    }}>
      <div style={{ 
        backgroundColor: "#ffffff",
        padding: "32px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ 
          marginBottom: "8px", 
          fontSize: "28px",
          fontWeight: "700",
          color: "#111827"
        }}>
          Welcome Back
        </h1>
        <p style={{ 
          marginBottom: "24px", 
          color: "#6b7280",
          fontSize: "16px"
        }}>
          Sign in to your nextere account
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label 
              htmlFor="email" 
              style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "500",
                color: "#374151"
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label 
              htmlFor="password" 
              style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "500",
                color: "#374151"
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "16px",
                boxSizing: "border-box"
              }}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#1d4ed8",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "16px"
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Don't have an account?{" "}
            <Link 
              to="/register" 
              style={{ 
                color: "#1d4ed8", 
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
