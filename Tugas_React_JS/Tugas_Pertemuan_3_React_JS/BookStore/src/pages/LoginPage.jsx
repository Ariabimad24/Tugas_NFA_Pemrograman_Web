import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #ddd",
  borderRadius: 8,
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!form.email || !form.password) return;
    setLoading(true);
    // Nanti diganti dengan fetch/axios ke API backend
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "calc(100vh - 120px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8f9fa",
      padding: "40px 20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 420,
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #e8e8e8",
        padding: "40px 36px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span style={{ fontSize: 32 }}>📚</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "8px 0 6px", color: "#222" }}>
            Welcome Back
          </h2>
          <p style={{ color: "#999", fontSize: 14, margin: 0 }}>
            Masuk ke akun BookStore kamu
          </p>
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 600, color: "#555" }}>
              Email
            </label>
            <input
              style={inputStyle}
              type="email"
              placeholder="email@contoh.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#2ba0cb")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 600, color: "#555" }}>
              Password
            </label>
            <input
              style={inputStyle}
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#2ba0cb")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              marginTop: 6,
              padding: "12px",
              borderRadius: 24,
              border: "none",
              background: loading ? "#a0d4e8" : "#2ba0cb",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </div>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          margin: "20px 0",
          color: "#ccc",
          fontSize: 13,
        }}>
          <div style={{ flex: 1, height: 1, background: "#eee" }} />
          atau
          <div style={{ flex: 1, height: 1, background: "#eee" }} />
        </div>

        <p style={{ textAlign: "center", margin: 0, fontSize: 14, color: "#888" }}>
          Belum punya akun?{" "}
          <Link to="/register" style={{ color: "#2ba0cb", fontWeight: 600, textDecoration: "none" }}>
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;