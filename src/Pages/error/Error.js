import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Error404 from "../../components/error/Error404";

export default function Error() {
  return (
    <div>
      <Header />
      <main>
        <Error404 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
