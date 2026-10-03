import React from "react";
import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  href = "#",
  onClick,
  style,
  className = "",
}) {
  const baseClass = variant === "primary" ? "hero-button-primary" : "hero-button-secondary";

  return (
    <a
      href={href}
      onClick={onClick}
      style={style}
      className={`hero-button ${baseClass} ${className}`}
    >
      {children}
    </a>
  );
}