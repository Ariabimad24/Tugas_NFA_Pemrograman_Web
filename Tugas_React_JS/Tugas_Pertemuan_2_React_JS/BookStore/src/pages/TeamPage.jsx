function TeamPage() {
  const members = [
    { name: "Bima Saputra", role: "Backend Developer" },
    { name: "Sarah Wijaya", role: "Frontend Developer" },
    { name: "Andi Pratama", role: "UI/UX Designer" },
    { name: "Rina Kusuma",  role: "Content Writer" },
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

export default TeamPage;