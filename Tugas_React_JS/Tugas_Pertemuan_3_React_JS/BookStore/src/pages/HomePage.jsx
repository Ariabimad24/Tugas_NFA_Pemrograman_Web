import { useNavigate } from "react-router-dom";
import { bukuHome } from "../assets";
import books from "../Utils/books";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ===== HERO ===== */}
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
            Discover an exclusive collection of the world's most transformative books.
            Minimalist, curated, and designed for deep thinkers.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => navigate("/book")}
              style={{
                padding: "12px 24px",
                borderRadius: 24,
                border: "none",
                background: "#2ba0cb",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Explore Collection
            </button>
            <button
              onClick={() => navigate("/team")}
              style={{
                padding: "12px 24px",
                borderRadius: 24,
                border: "1px solid #2ba0cb",
                background: "#fff",
                color: "#2ba0cb",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <img
          src={bukuHome}
          alt="Book collection"
          style={{ flex: 1, minWidth: 280, height: 260, borderRadius: 12, objectFit: "cover" }}
        />
      </section>

      {/* ===== BEST SELLER (data dari books.js, pakai .map()) ===== */}
      <section style={{ background: "#f8f9fa", padding: "50px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>
            Best Seller
          </h2>
          <p style={{ textAlign: "center", color: "#888", margin: "0 0 32px", fontSize: 15 }}>
            Something short and leading about the collection below—its contents, the creator, etc.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
          }}>
            {books.map((book) => (
              <div key={book.id} style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #e8e8e8",
              }}>
                <img src={book.image} alt={book.title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                <div style={{ padding: 16 }}>
                  <h4 style={{ margin: "0 0 4px", fontSize: 16 }}>{book.title}</h4>
                  <p style={{ margin: "0 0 8px", color: "#2ba0cb", fontSize: 13 }}>
                    {book.author} ({book.year})
                  </p>
                  <p style={{ margin: 0, color: "#888", fontSize: 13, lineHeight: 1.5 }}>{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;