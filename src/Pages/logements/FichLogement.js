import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FicheLogementDisplay from "../../components/fichelogement/FicheLogementDisplay";

export default function FichLogement() {
  return (
    <div>
      <header>
        <Header /> 
      </header>
      <main>
        <FicheLogementDisplay/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
