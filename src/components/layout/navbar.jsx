import Image from "next/image";
import React from "react";
import Divider from "../base/Divider";
import LinkButton from "../base/LinkButton";

function Navbar() {
  return (
    <>
      <nav className="lg:px-10 h-[76px] px-4 py-2">
        {/* <h1 className="text-4xl font-semibold text-yellow-800">मेरा चरावां</h1> */}
        <Image
          src="https://i.ibb.co/JCkn2x6/IMG-20210930-144311.jpg"
          width={"200"}
          height={"80"}
          alt="charawan-logo"
        />
      </nav>
      <Divider />
      <nav className="lg:px-10 px-4 py-2  md:flex hidden flex flex-wrap  justify-between bg-primary-500 ">
        <div className="flex md:gap-8 gap-4 flex-wrap">
          <LinkButton> दुकानें</LinkButton>
          <LinkButton> इतिहास </LinkButton>
          <LinkButton> गैलरी </LinkButton>
          <LinkButton> क्रिकेट </LinkButton>
          <LinkButton> त्यौहार</LinkButton>
          <LinkButton> इलेक्शन </LinkButton>
        </div>
        <div className="md:gap-8 gap-4 flex flex-wrap">
          <LinkButton> सहयोग करें </LinkButton>
          <LinkButton> व्हाट्सप्प ग्रुप </LinkButton>
          <LinkButton> संपर्क करें </LinkButton>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
