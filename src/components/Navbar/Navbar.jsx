import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">ShopEase</h1>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"} 
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
        <li onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;