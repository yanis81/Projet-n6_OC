import React from "react";
import logo_Footer from "../../assets/logo/logo_footer.png";

export default function Footer() {
  return (
    <div className="footer_element">
      <img src={logo_Footer} alt="logo du site Kasa" className="footer_element__logo" />
      <p className="footer_element__text-copyright">© 2020 Kasa. All rights reserved</p>
    </div>
      
  );
}

