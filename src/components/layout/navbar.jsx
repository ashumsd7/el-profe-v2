import Image from "next/image";
import React from "react";
import Divider from "../base/Divider";

function Navbar() {
  return (
    <>
      <nav className="lg:px-10 px-4 py-2">
        <h1 className="text-4xl font-semibold text-yellow-800">मेरा चरावां</h1>
        {/* <Image src='https://i.ibb.co/JCkn2x6/IMG-20210930-144311.jpg' width={'200'} height={'100'} alt='charawan-logo'/> */}
      </nav>
      <Divider />
    </>
  );
}

export default Navbar;
