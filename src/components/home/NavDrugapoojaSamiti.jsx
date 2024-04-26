import React from "react";
import ImageSlider from "./image-slider";
import LinkButton from "../base/LinkButton";

function NavDrugapoojaSamiti() {
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder border-r-4 border-yellow-500  text-primary-200 text-2xl  font-serif bg-secondary-800  py-2">
          श्री नव दुर्गा पूजा समिति
        </h2>
        <ImageSlider />
      </div>
      <div className="flex justify-center my-2">
        <LinkButton className="text-center mx-auto text-base text-primary-700 underline hover:text-primary-700 ">
          श्री नव दुर्गा पूजा समिति के बारे में और जानकारी
        </LinkButton>
      </div>
    </section>
  );
}

export default NavDrugapoojaSamiti;
