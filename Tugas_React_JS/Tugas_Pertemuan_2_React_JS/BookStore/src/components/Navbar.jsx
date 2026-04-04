import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { to: "/",        label: "Home", end: true },
    { to: "/book",    label: "Book" },
    { to: "/team",    label: "Team" },
    { to: "/contact", label: "Contact" },
  ];

  return (
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
      {/* Logo */}
      <NavLink to="/" style={{ fontWeight: "bold", fontSize: 20, textDecoration: "none", color: "#222" }}>
        BookStore
      </NavLink>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: 28 }}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            style={({ isActive }) => ({
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              textDecoration: "none",
              color: isActive ? "#2ba0cb" : "#555",
              fontWeight: isActive ? "bold" : "normal",
              borderBottom: isActive ? "2px solid #2ba0cb" : "2px solid transparent",
              paddingBottom: 4,
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Auth Buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            padding: "8px 20px",
            border: "1px solid #2ba0cb",
            borderRadius: 20,
            background: isActive ? "#2ba0cb" : "#fff",
            color: isActive ? "#fff" : "#2ba0cb",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
          })}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => ({
            padding: "8px 20px",
            border: "none",
            borderRadius: 20,
            background: isActive ? "#1a85aa" : "#2ba0cb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
          })}
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;