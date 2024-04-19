import React from "react";
import logo_footer from "../../assets/logo/logo_footer.png";

export default function Footer() {
  return (
    <Footer>
      <img src={logo_footer} alt="logo du site Kasa" className="footer__logo" />
      <p className="footer__text-copyright">© 2020 Kasa. All rights reserved</p>
    </Footer>
  );
}
