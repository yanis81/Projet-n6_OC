import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import ImageaboutBanner from "../../assets/banner/aboutBanner.png";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <Banner image={ImageaboutBanner} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
