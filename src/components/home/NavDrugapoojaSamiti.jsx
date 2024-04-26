import React from "react";
import ImageSlider from "./image-slider";
import LinkButton from "../base/LinkButton";
import Image from "next/image";

function NavDrugapoojaSamiti() {
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder border-r-4 border-yellow-500  text-primary-100 text-2xl  font-serif bg-primary-500  py-2">
          श्री नव दुर्गा पूजा समिति
        </h2>
        {/* <ImageSlider /> */}
        <div className="m-auto">
          <Image
            src="https://i.ibb.co/NsTWhh1/Mix-Collage-27-Apr-2024-12-12-AM-6092.jpg"
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="flex justify-center my-2">
        <LinkButton className="text-center mx-auto text-base text-primary-500 underline hover:text-primary-500 ">
          श्री नव दुर्गा पूजा समिति के बारे में और जानकारी
        </LinkButton>
      </div>
    </section>
  );
}

export default NavDrugapoojaSamiti;
