import React from "react";
import LOGO from "../../assets/logo/LOGO.svg";
import Nav from "../Nav/nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={LOGO} alt="logo de l'agence kasa" />
      </figure>
      <Nav />
    </header>
  );
}
