import { useState } from "react";

const inputStyle = {
  padding: "10px 14px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
};

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 40px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 8px" }}>Contact Us</h1>
      <p style={{ color: "#888", margin: "0 0 28px" }}>Have a question? Send us a message.</p>

      {sent ? (
        <div style={{
          background: "#d4edda",
          border: "1px solid #c3e6cb",
          borderRadius: 6,
          padding: 20,
          color: "#155724",
          textAlign: "center",
        }}>
          Pesan terkirim! Terima kasih.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input placeholder="Nama" style={inputStyle} />
          <input placeholder="Email" type="email" style={inputStyle} />
          <input placeholder="Subject" style={inputStyle} />
          <textarea placeholder="Pesan" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
          <button
            onClick={() => setSent(true)}
            style={{
              padding: "12px 28px",
              borderRadius: 24,
              border: "none",
              background: "#2ba0cb",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Send Message
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactPage;