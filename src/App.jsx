import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Minimal app shell. We'll grow this with Paragon / frontend-platform later.
export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
        <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>
          nextere
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
