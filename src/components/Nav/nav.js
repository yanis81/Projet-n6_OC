import React from "react";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <nav className="nav-header">
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  );
}
