import Image from "next/image";
import React from "react";
import Divider from "../base/Divider";
import LinkButton from "../base/LinkButton";
import Link from "next/link";
import Button from "../base/Button";

function Navbar() {
  return (
    <>
      <nav className="lg:px-10 h-[76px] px-4 py-2 flex justify-between items-center">
        {/* <h1 className="text-4xl font-semibold text-yellow-800">मेरा चरावां</h1> */}
        <Image
          src="https://i.ibb.co/JCkn2x6/IMG-20210930-144311.jpg"
          width={"200"}
          height={"80"}
          alt="charawan-logo"
        />
        <Link href="/shops">
          <Button className="text-black"> दुकानें</Button>
        </Link>
      </nav>
      <nav></nav>
      <Divider />
      <nav className="lg:px-10 px-4 py-2  md:flex hidden  flex-wrap  justify-between bg-yellow-300 fix ">
        <marquee>
          <p className="text-black font-mono tracking-widest">
            || हमने अस्थायी रूप से वेबसाइट काम को वित्तीय संकट के कारण बंद कर
            दिया है। हम आपकी सहनशीलता और समझ की कदर करते हैं। हम जल्द ही काम फिर
            से शुरू करेंगे और इस वेबसाइट को पूरा करेंगे। आपके समर्थन के लिए
            धन्यवाद। खुश रहें! Contact: 7800818001 || We have temporarily halted
            our work due to financial constraints. We appreciate your patience
            and understanding. We will resume work as soon as possible and
            complete this website. Thank you for your support. Stay happy! ||
          </p>
        </marquee>
      </nav>
      <Divider />
      <nav className="lg:px-10 px-4 py-2  md:flex hidden  flex-wrap  justify-between bg-black fix ">
        <div className="flex md:gap-8 gap-4 flex-wrap">
          <Link href="/shops">
            <LinkButton> दुकानें</LinkButton>
          </Link>
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
