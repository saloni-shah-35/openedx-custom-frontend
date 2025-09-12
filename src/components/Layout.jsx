import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ 
        padding: "16px 24px", 
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}>
          <Link 
            to="/" 
            style={{ 
              fontWeight: 700, 
              fontSize: "24px",
              textDecoration: "none", 
              color: "#1d4ed8"
            }}
          >
            Next frontend
          </Link>
          
          <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: "none", 
                color: isActive("/") ? "#1d4ed8" : "#6b7280",
                fontWeight: isActive("/") ? "600" : "400",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "all 0.2s"
              }}
            >
              Home
            </Link>
            <Link 
              to="/login" 
              style={{ 
                textDecoration: "none", 
                color: isActive("/login") ? "#1d4ed8" : "#6b7280",
                fontWeight: isActive("/login") ? "600" : "400",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "all 0.2s"
              }}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              style={{ 
                textDecoration: "none", 
                color: isActive("/register") ? "#1d4ed8" : "#6b7280",
                fontWeight: isActive("/register") ? "600" : "400",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "all 0.2s"
              }}
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ 
        padding: "24px", 
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#f9fafb",
        textAlign: "center",
        color: "#6b7280"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ margin: 0 }}>
            © 2024 nextere. Built with OpenEdX custom frontend.
          </p>
        </div>
      </footer>
    </div>
  );
}
