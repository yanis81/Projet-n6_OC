import React from "react";
import LOGO from "../../assets/logo/LOGO.svg";
import Nav from "../Nav/nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <Link to="/">
           <img className="logo" src={LOGO} alt="logo de l'agence kasa" />
        </Link>
      </figure>
      <Nav />
    </header>
  );
}
