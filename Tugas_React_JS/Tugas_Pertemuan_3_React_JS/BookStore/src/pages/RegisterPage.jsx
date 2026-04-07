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

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setError("");

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Semua field harus diisi.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Password dan konfirmasi tidak cocok.");
      return;
    }

    setLoading(true);
    // Nanti diganti dengan fetch/axios ke API backend
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
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
          <span style={{ fontSize: 32 }}>📖</span>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "8px 0 6px", color: "#222" }}>
            Buat Akun
          </h2>
          <p style={{ color: "#999", fontSize: 14, margin: 0 }}>
            Bergabung dengan BookStore sekarang
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            padding: "10px 14px",
            borderRadius: 8,
            background: "#fff5f5",
            border: "1px solid #fcc",
            color: "#c0392b",
            fontSize: 13,
            marginBottom: 14,
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 600, color: "#555" }}>
              Nama Lengkap
            </label>
            <input
              style={inputStyle}
              placeholder="Nama lengkap kamu"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#2ba0cb")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

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
              placeholder="Minimal 8 karakter"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#2ba0cb")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 600, color: "#555" }}>
              Konfirmasi Password
            </label>
            <input
              style={inputStyle}
              type="password"
              placeholder="Ulangi password kamu"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              onFocus={(e) => (e.target.style.borderColor = "#2ba0cb")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>

          <button
            onClick={handleRegister}
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
            {loading ? "Memproses..." : "Daftar Sekarang"}
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
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "#2ba0cb", fontWeight: 600, textDecoration: "none" }}>
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;