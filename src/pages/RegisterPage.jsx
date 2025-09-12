import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Handle registration logic here
    console.log("Registration attempt:", formData);
    alert("Registration functionality would be implemented here!");
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
          Create Account
        </h1>
        <p style={{ 
          marginBottom: "24px", 
          color: "#6b7280",
          fontSize: "16px"
        }}>
          Join nextere and start your learning journey
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <label 
                htmlFor="firstName" 
                style={{ 
                  display: "block", 
                  marginBottom: "6px", 
                  fontWeight: "500",
                  color: "#374151"
                }}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
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
                placeholder="First name"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label 
                htmlFor="lastName" 
                style={{ 
                  display: "block", 
                  marginBottom: "6px", 
                  fontWeight: "500",
                  color: "#374151"
                }}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
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
                placeholder="Last name"
              />
            </div>
          </div>

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

          <div style={{ marginBottom: "16px" }}>
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
              placeholder="Create a password"
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label 
              htmlFor="confirmPassword" 
              style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "500",
                color: "#374151"
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              placeholder="Confirm your password"
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
            Create Account
          </button>
        </form>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b7280", margin: 0 }}>
            Already have an account?{" "}
            <Link 
              to="/login" 
              style={{ 
                color: "#1d4ed8", 
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
