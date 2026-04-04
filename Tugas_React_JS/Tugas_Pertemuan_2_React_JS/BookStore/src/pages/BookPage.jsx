import { bukuAtomic, bukuClean, bukuDeep, bukuPragmatic, bukuSapiens, bukuThingking } from "../assets";

function BookPage() {
  const books = [
    { title: "Atomic Habits",           author: "James Clear",        category: "Self-Help",   img: bukuAtomic },
    { title: "Deep Work",               author: "Cal Newport",        category: "Productivity", img: bukuDeep },
    { title: "The Pragmatic Programmer", author: "David Thomas",      category: "Programming", img: bukuPragmatic },
    { title: "Clean Code",              author: "Robert C. Martin",   category: "Programming", img: bukuClean },
    { title: "Sapiens",                 author: "Yuval Noah Harari",  category: "History",     img: bukuSapiens },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman",   category: "Psychology",  img: bukuThingking },
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
            <img src={book.img} alt={book.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />
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
              }}>
                {book.category}
              </span>
              <h4 style={{ margin: "0 0 4px", fontSize: 15 }}>{book.title}</h4>
              <p style={{ margin: 0, color: "#999", fontSize: 13 }}>{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookPage;