import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <nav className="nav-header">
      <Link to="/" className="nav-header__nav-link-home">Accueil</Link>
      <Link to="/about" className="nav-header__nav-link-about">A Propos</Link>
    </nav>
  );
}
