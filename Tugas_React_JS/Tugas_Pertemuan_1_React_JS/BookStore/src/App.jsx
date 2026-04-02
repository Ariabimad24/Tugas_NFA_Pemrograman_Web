import { useState } from "react";

import { bukuHome, bukuAtomic, bukuClean, bukuDeep, bukuPragmatic, bukuSapiens, bukuThingking } from "./assets";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#fff" }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 40px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <span style={{ fontWeight: "bold", fontSize: 20 }}>BookStore</span>

        <div style={{ display: "flex", gap: 28 }}>
          {["home", "book", "team", "contact"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                color: page === p ? "#2ba0cb" : "#555",
                fontWeight: page === p ? "bold" : "normal",
                textTransform: "capitalize",
                borderBottom: page === p ? "2px solid #2ba0cb" : "2px solid transparent",
                paddingBottom: 4,
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button style={{
            padding: "8px 20px",
            border: "1px solid #2ba0cb",
            borderRadius: 20,
            background: "#fff",
            color: "#2ba0cb",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
          }}>Login</button>
          <button style={{
            padding: "8px 20px",
            border: "none",
            borderRadius: 20,
            background: "#2ba0cb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
          }}>Register</button>
        </div>
      </nav>

      {/* Content */}
      <div>
        {page === "home" && <Home />}
        {page === "book" && <Book />}
        {page === "team" && <Team />}
        {page === "contact" && <Contact />}
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: 24,
        borderTop: "1px solid #eee",
        color: "#999",
        fontSize: 14,
      }}>
        © 2026 Bookstore - NF Academy - Aria Bima Darmawan
      </footer>
    </div>
  );
}

// ========== HOME ==========
function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        gap: 40,
        flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", color: "#222" }}>
            Expand your mind, one page at a time.
          </h1>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
            Discover an exclusive collection of the world's most transformative books. Minimalist, curated, and designed for deep thinkers.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{
              padding: "12px 24px",
              borderRadius: 24,
              border: "none",
              background: "#2ba0cb",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}>Explore Collection</button>
            <button style={{
              padding: "12px 24px",
              borderRadius: 24,
              border: "1px solid #2ba0cb",
              background: "#fff",
              color: "#2ba0cb",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}>Learn More</button>
          </div>
        </div>
        <img src={bukuHome} alt="Book collection" style={{
          flex: 1,
          minWidth: 280,
          height: 260,
          borderRadius: 12,
          objectFit: "cover",
        }} />
      </section>

      {/* Best Seller */}
      <section style={{
        background: "#f8f9fa",
        padding: "50px 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>Best Seller</h2>
          <p style={{ textAlign: "center", color: "#888", margin: "0 0 32px", fontSize: 15 }}>
            Something short and leading about the collection below—its contents, the creator, etc.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
          }}>
            {[
              { title: "Atomic Habits", author: "James Clear", desc: "Tiny changes, remarkable results. A guide to building good habits and breaking bad ones.", img: bukuAtomic },
              { title: "Deep Work", author: "Cal Newport", desc: "Rules for focused success in a distracted world. Learn to concentrate deeply.", img: bukuDeep },
              { title: "The Pragmatic Programmer", author: "David Thomas", desc: "Your journey to mastery. A classic guide for software developers.", img: bukuPragmatic },
            ].map((book, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #e8e8e8",
              }}>
                <img src={book.img} alt={book.title} style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                }} />
                <div style={{ padding: 16 }}>
                  <h4 style={{ margin: "0 0 4px", fontSize: 16 }}>{book.title}</h4>
                  <p style={{ margin: "0 0 8px", color: "#2ba0cb", fontSize: 13 }}>{book.author}</p>
                  <p style={{ margin: 0, color: "#888", fontSize: 13, lineHeight: 1.5 }}>{book.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ========== BOOK ==========
function Book() {
  const books = [
    { title: "Atomic Habits", author: "James Clear", category: "Self-Help", img: bukuAtomic },
    { title: "Deep Work", author: "Cal Newport", category: "Productivity", img: bukuDeep },
    { title: "The Pragmatic Programmer", author: "David Thomas", category: "Programming", img: bukuPragmatic },
    { title: "Clean Code", author: "Robert C. Martin", category: "Programming", img: bukuClean },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "History", img: bukuSapiens },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", img: bukuThingking },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 8px" }}>All Books</h1>
      <p style={{ color: "#888", margin: "0 0 28px" }}>Browse our full collection.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
      }}>
        {books.map((book, i) => (
          <div key={i} style={{
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid #e8e8e8",
          }}>
            <img src={book.img} alt={book.title} style={{
              width: "100%",
              height: 140,
              objectFit: "cover",
            }} />
            <div style={{ padding: 16 }}>
              <span style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 10,
                background: "#e8f6fb",
                color: "#2ba0cb",
                fontSize: 11,
                fontWeight: 600,
                marginBottom: 8,
              }}>{book.category}</span>
              <h4 style={{ margin: "0 0 4px", fontSize: 15 }}>{book.title}</h4>
              <p style={{ margin: 0, color: "#999", fontSize: 13 }}>{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== TEAM ==========
function Team() {
  const members = [
    { name: "Bima Saputra", role: "Backend Developer" },
    { name: "Sarah Wijaya", role: "Frontend Developer" },
    { name: "Andi Pratama", role: "UI/UX Designer" },
    { name: "Rina Kusuma", role: "Content Writer" },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px" }}>
      <h1 style={{ fontSize: 28, margin: "0 0 8px" }}>Our Team</h1>
      <p style={{ color: "#888", margin: "0 0 28px" }}>Meet the people behind bookstore.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20,
      }}>
        {members.map((m, i) => (
          <div key={i} style={{
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: 8,
            padding: 24,
            textAlign: "center",
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#e8f6fb",
              color: "#2ba0cb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 22,
              margin: "0 auto 14px",
            }}>
              {m.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h4 style={{ margin: "0 0 4px", fontSize: 16 }}>{m.name}</h4>
            <p style={{ margin: 0, color: "#888", fontSize: 14 }}>{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== CONTACT ==========
function Contact() {
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

const inputStyle = {
  padding: "10px 14px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
};

export default App;