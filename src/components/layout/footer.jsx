import React from "react";
import QuickLinksFooter from "./quick-links";
import FooterMap from "../common/FooterMap";
import FooterLinksAndAbout from "../common/FooterLinksAndAbout";

function Footer() {
  return (
    <footer className="">
      <FooterLinksAndAbout />
      <FooterMap />
    </footer>
  );
}

export default Footer;
