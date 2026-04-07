import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#fff" }}>
      <Navbar />

      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/book"    element={<BookPage />} />
        <Route path="/team"    element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login"   element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

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

export default App;