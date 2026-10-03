// src/components/layout/MobileMenu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navigationData";
import Button from "../ui/Button";
import "./MobileMenu.css";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Semi-transparent backdrop overlay */}
      <div 
        className={`mobile-backdrop ${isOpen ? "active" : ""}`} 
        onClick={onClose} 
        aria-hidden="true"
      />

      <div 
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        aria-hidden={!isOpen}
      >
        {/* Close Button (X) */}
        <button 
          className="mobile-menu-close" 
          onClick={onClose}
          aria-label="Close menu"
        >
          <span className="close-line rotate-45" />
          <span className="close-line -rotate-45" />
        </button>

        <nav className="mobile-nav-links">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) => (isActive ? "active-mobile-link" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          href="/prayer-request"
          onClick={onClose}
          className="mobile-cta"
        >
          Prayer Request
        </Button>
      </div>
    </>
  );
}