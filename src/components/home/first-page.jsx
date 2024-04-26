import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./image-slider";
import Image from "next/image";
function FirstPage() {
  const titles = ["मेरा चरावां", "मेरा चरावां2 ", "मेरा चरावां4"];
  const [activeTitle, setActiveTitle] = useState(titles[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let currIndex = titles.indexOf(activeTitle);
  //     if (currIndex >= 0) {
  //       currIndex++;
  //       setActiveTitle(titles[currIndex]);
  //     } else if (currIndex >= 2) {
  //       currIndex = 0;
  //       setActiveTitle(titles[currIndex]);
  //     }
  //     console.log("currIndex", currIndex);
  //     // setActiveTitle(titles[currIndex]);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 -mx-2">
      {/* <ImageSlider /> */}
      <div className="flex justify-center items-center bg-home-page">
        <h2 className="font-extrabold md:flex hidden a text-primary-500 lg:text-9xl  text-6xl ">
          {activeTitle}
        </h2>
      </div>
      <div className=" m-auto py-8">
        <Image
          src="https://i.ibb.co/wy7c28K/Screenshot-2024-04-27-at-1-00-57-AM.png"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}

export default FirstPage;
