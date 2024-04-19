import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import ImageaboutBanner from "../../assets/banner/aboutBanner.png";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <Banner image={ImageaboutBanner} />

        <h1>bienvenue sur about</h1>
      </main>
    </div>
  );
}
