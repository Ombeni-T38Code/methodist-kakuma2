import React from "react";
import "./HeaderSection.css";

export default function HeaderSection() {
  return (
    <header className="header-section">
      <h1 className="header-title font-serif-heading">
        A Church Built on{" "}
        <span className="header-title-accent">
          Faith, Love & Community
        </span>
      </h1>

      <p className="header-description">
        Rooted in the gospel of Christ and dedicated to
        serving the vibrant people of Turkana West. We are
        a family of four congregations united under one
        living hope.
      </p>
    </header>
  );
}