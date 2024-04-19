import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import ImagehomeBanner from "../../assets/banner/homeBanner.png";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={ImagehomeBanner} />
        <Gallery />
      </main>
    </div>
  );
}
