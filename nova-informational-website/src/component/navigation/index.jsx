import React, { useState } from "react";
import './style.css'
import { BsList , BsX  } from "react-icons/bs";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav id="menu" className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="container">
        <div className="flex-container">
          <div className="image-container">
            <img src="img/image/logo.png" alt="Your" />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <BsX size="30" color="white" />
            ) : (
              <BsList size="30" />
            )}
          </div>
          <ul id="close-menu"className={`nav-links ${menuOpen ? "active" : ""}`} onClick={closeMenu}>
            <li>
              <a href="#header" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="nav-item">
                Values
              </a>
            </li>
            <li>
              <a href="#products" className="nav-item">
                Products
              </a>
            </li>
            <li>
              <a href="#team" className="nav-item">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
