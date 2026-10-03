// src/components/layout/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { navItems } from "../../data/navigationData";
import Button from "../ui/Button";
import logo from "../../assets/brand/logo.png";
import "./Navbar.css";

export default function Navbar({ isMobileMenuOpen, onToggleMenu }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand / Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <img src={logo} alt="Methodist Church Kakuma Fellowship logo" className="logo-image" />
          </div>
          <div className="logo-text">
            <strong>METHODIST CHURCH</strong>
            <span>KAKUMA FELLOWSHIP</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `nav-item-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Prayer Request CTA */}
        <div className="nav-actions">
          <Button href="/prayer-request" variant="primary">
            Prayer Request
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={onToggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>
      </div>
    </header>
  );
}