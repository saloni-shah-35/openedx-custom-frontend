import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            padding: "60px 24px" 
        }}>
            {/* Hero Section */}
            <div style={{ 
                textAlign: "center", 
                marginBottom: "80px" 
            }}>
                <h1 style={{ 
                    fontSize: "48px", 
                    fontWeight: "700", 
                    marginBottom: "16px",
                    color: "#111827",
                    lineHeight: "1.2"
                }}>
                    Welcome to nextere
                </h1>
                <p style={{ 
                    fontSize: "20px", 
                    color: "#6b7280", 
                    marginBottom: "32px",
                    maxWidth: "600px",
                    margin: "0 auto 32px auto"
                }}>
                    Learn. Build. Grow. — Your custom React MFE for OpenEdX.
                </p>
                
                <div style={{ 
                    display: "flex", 
                    gap: "16px", 
                    justifyContent: "center",
                    marginBottom: "48px"
                }}>
                    <Link 
                        to="/register"
                        style={{
                            padding: "12px 24px",
                            backgroundColor: "#1d4ed8",
                            color: "#ffffff",
                            textDecoration: "none",
                            borderRadius: "8px",
                            fontWeight: "600",
                            fontSize: "16px",
                            transition: "background-color 0.2s"
                        }}
                    >
                        Get Started
                    </Link>
                    <Link 
                        to="/login"
                        style={{
                            padding: "12px 24px",
                            backgroundColor: "transparent",
                            color: "#1d4ed8",
                            textDecoration: "none",
                            borderRadius: "8px",
                            fontWeight: "600",
                            fontSize: "16px",
                            border: "2px solid #1d4ed8",
                            transition: "all 0.2s"
                        }}
                    >
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Search Section */}
            <div style={{ 
                backgroundColor: "#f9fafb",
                padding: "40px",
                borderRadius: "12px",
                marginBottom: "60px"
            }}>
                <h2 style={{ 
                    fontSize: "24px", 
                    fontWeight: "600", 
                    marginBottom: "16px",
                    color: "#111827",
                    textAlign: "center"
                }}>
                    Find Your Next Course
                </h2>
                <form method="get" action="/courses" style={{ 
                    display: "flex", 
                    gap: "12px", 
                    maxWidth: "600px",
                    margin: "0 auto"
                }}>
                    <input
                        name="search_query"
                        placeholder="Search for a course..."
                        style={{ 
                            flex: 1, 
                            padding: "14px 16px",
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "16px",
                            outline: "none"
                        }}
                    />
                    <button
                        type="submit"
                        style={{ 
                            padding: "14px 24px", 
                            background: "#1d4ed8", 
                            color: "#fff", 
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* Features Section */}
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "32px",
                marginBottom: "60px"
            }}>
                <div style={{ 
                    textAlign: "center",
                    padding: "24px"
                }}>
                    <div style={{ 
                        width: "64px", 
                        height: "64px", 
                        backgroundColor: "#dbeafe", 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        margin: "0 auto 16px auto"
                    }}>
                        <span style={{ fontSize: "24px" }}>📚</span>
                    </div>
                    <h3 style={{ 
                        fontSize: "20px", 
                        fontWeight: "600", 
                        marginBottom: "8px",
                        color: "#111827"
                    }}>
                        Learn Anything
                    </h3>
                    <p style={{ 
                        color: "#6b7280",
                        lineHeight: "1.6"
                    }}>
                        Access thousands of courses across various subjects and skill levels.
                    </p>
                </div>

                <div style={{ 
                    textAlign: "center",
                    padding: "24px"
                }}>
                    <div style={{ 
                        width: "64px", 
                        height: "64px", 
                        backgroundColor: "#dcfce7", 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        margin: "0 auto 16px auto"
                    }}>
                        <span style={{ fontSize: "24px" }}>🚀</span>
                    </div>
                    <h3 style={{ 
                        fontSize: "20px", 
                        fontWeight: "600", 
                        marginBottom: "8px",
                        color: "#111827"
                    }}>
                        Build Skills
                    </h3>
                    <p style={{ 
                        color: "#6b7280",
                        lineHeight: "1.6"
                    }}>
                        Develop practical skills with hands-on projects and real-world applications.
                    </p>
                </div>

                <div style={{ 
                    textAlign: "center",
                    padding: "24px"
                }}>
                    <div style={{ 
                        width: "64px", 
                        height: "64px", 
                        backgroundColor: "#fef3c7", 
                        borderRadius: "50%", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        margin: "0 auto 16px auto"
                    }}>
                        <span style={{ fontSize: "24px" }}>💡</span>
                    </div>
                    <h3 style={{ 
                        fontSize: "20px", 
                        fontWeight: "600", 
                        marginBottom: "8px",
                        color: "#111827"
                    }}>
                        Grow Together
                    </h3>
                    <p style={{ 
                        color: "#6b7280",
                        lineHeight: "1.6"
                    }}>
                        Join a community of learners and collaborate on exciting projects.
                    </p>
                </div>
            </div>
        </div>
    );
}
