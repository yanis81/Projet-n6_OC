import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Error404 from "../../components/error/Error404";

export default function Error() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <Error404 />
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
