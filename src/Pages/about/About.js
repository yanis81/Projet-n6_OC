import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner/Banner";
import ImageaboutBanner from "../../assets/banner/aboutBanner.png";
import Collapse from "../../components/collapse/Collapse";
import CollapseData  from "../../Datas/collapses.json";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <Banner image={ImageaboutBanner} />
        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
