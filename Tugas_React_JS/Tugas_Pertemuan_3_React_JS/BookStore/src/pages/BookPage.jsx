import { useState } from "react";
import books from "../Utils/books";

function BookPage() {
  const [bookList, setBookList] = useState(books);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
  });

  const handleAdd = () => {
    if (!form.title || !form.author || !form.year) {
      alert("Title, Author, dan Year wajib diisi!");
      return;
    }
    const newBook = {
      id: bookList.length + 1,
      title: form.title,
      author: form.author,
      year: Number(form.year),
      description: form.description,
      image: "https://placehold.co/300x200?text=" + encodeURIComponent(form.title),
    };
    setBookList([...bookList, newBook]);
    setForm({ title: "", author: "", year: "", description: "" });
    setShowForm(false);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>All Books</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: "10px 20px",
            borderRadius: 24,
            border: "none",
            background: "#2ba0cb",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {showForm ? "Batal" : "+ Tambah Buku"}
        </button>
      </div>
      <p style={{ color: "#888", margin: "0 0 28px" }}>Browse our full collection.</p>

      {/* ===== FORM TAMBAH BUKU ===== */}
      {showForm && (
        <div style={{
          border: "1px solid #e8e8e8",
          borderRadius: 8,
          padding: 20,
          marginBottom: 24,
          background: "#f8f9fa",
        }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 18 }}>Tambah Buku Baru</h3>
          <input
            placeholder="Judul buku"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="Penulis"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="Tahun"
            type="number"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
            style={inputStyle}
          />
          <input
            placeholder="Deskripsi"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            style={inputStyle}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: "10px 24px",
              borderRadius: 24,
              border: "none",
              background: "#2ba0cb",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Simpan
          </button>
        </div>
      )}

      {/* ===== DAFTAR BUKU map() ===== */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
      }}>
        {bookList.map((book) => (
          <div key={book.id} style={{
            background: "#fff",
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid #e8e8e8",
          }}>
            <img src={book.image} alt={book.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />
            <div style={{ padding: 16 }}>
              <h4 style={{ margin: "0 0 4px", fontSize: 15 }}>{book.title}</h4>
              <p style={{ margin: "0 0 4px", color: "#2ba0cb", fontSize: 13 }}>
                {book.author} ({book.year})
              </p>
              <p style={{ margin: 0, color: "#888", fontSize: 13, lineHeight: 1.5 }}>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px 12px",
  marginBottom: 10,
  border: "1px solid #ddd",
  borderRadius: 8,
  fontSize: 14,
  boxSizing: "border-box",
  outline: "none",
};

export default BookPage;