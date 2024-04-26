import React from "react";
import ImageSlider from "./image-slider";
import LinkButton from "../base/LinkButton";

function CharawanCrcketClub() {
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder   text-primary-200 text-2xl  font-serif bg-secondary-800  py-2">
          चरावां क्रिकेट क्लब
        </h2>
        <ImageSlider />

        <div className="flex justify-center my-2">
          <LinkButton className="text-center mx-auto text-base text-primary-700 underline  hover:text-primary-700">
            चरावां क्रिकेट क्लब के बारे में और जानकारी
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default CharawanCrcketClub;
