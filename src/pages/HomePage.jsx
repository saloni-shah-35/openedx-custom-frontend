import React from "react";

export default function HomePage() {
    return (
        <main style={{ maxWidth: 960, margin: "48px auto", padding: "0 16px" }}>
            <h1 style={{ marginBottom: 8 }}>Welcome to nextere</h1>
            <p style={{ opacity: 0.8, marginBottom: 24 }}>
                Learn. Build. Grow. — custom React MFE.
            </p>

            <form method="get" action="/courses" style={{ display: "flex", gap: 8 }}>
                <input
                    name="search_query"
                    placeholder="Search for a course"
                    style={{ flex: 1, padding: "10px 12px" }}
                />
                <button
                    type="submit"
                    style={{ padding: "10px 16px", background: "#1d4ed8", color: "#fff", border: 0 }}
                >
                    Search
                </button>
            </form>
        </main>
    );
}
