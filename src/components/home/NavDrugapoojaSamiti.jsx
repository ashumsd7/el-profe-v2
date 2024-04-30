import React from "react";
import ImageSlider from "./image-slider";
import LinkButton from "../base/LinkButton";
import Image from "next/image";
import Link from "next/link";

function NavDrugapoojaSamiti() {
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder border-r-4 border-yellow-500  text-primary-100 text-2xl  font-serif bg-primary-500  py-2">
          श्री नव दुर्गा पूजा समिति
        </h2>
        {/* <ImageSlider /> */}
        <div className="m-auto my-10">
          <Image
            className="border rounded-md shadow-lg transition-opacity ease-in-out delay-150 border-yellow-200 overflow-hidden"
            src="https://i.ibb.co/2PN4wWt/Screenshot-2024-04-30-at-3-39-25-PM.png"
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="flex justify-center my-2">
        <Link
          href="/festivals"
          className=" mx-auto text-base text-primary-500 underline
          hover:text-primary-500"
        >
          श्री नव दुर्गा पूजा समिति के बारे में और जानकारी
        </Link>
      </div>
    </section>
  );
}

export default NavDrugapoojaSamiti;
