import React, { useEffect, useState } from "react";
import ImageSlider from "./image-slider";
import LinkButton from "../base/LinkButton";
import Divider from "../base/Divider";
import Image from "next/image";
import Link from "next/link";

function CharawanCrcketClub() {
  const Images = [
    "https://i.ibb.co/DMXLKrX/cri-khabbu.jpg",
    "https://i.ibb.co/KqgnqFL/cric-img1.jpg",
    "https://i.ibb.co/rx8gvP6/cric-img2.jpg",
    "https://i.ibb.co/4NsMMSZ/cric-img4.jpg",
    "https://i.ibb.co/92NgYs1/cric-img5.jpg",
    "https://i.ibb.co/ZBN7qYR/cric-img6.jpg",
    "https://i.ibb.co/svX6vq0/cric-img7.jpg",
    "https://i.ibb.co/GH9D2Zp/cric-img8.jpg",
    "https://i.ibb.co/j6nhXnr/cric-img9.jpg",
    "https://i.ibb.co/VLdGjnq/cric-img11.jpg",
  ];
  const [currImage, setCurrImage] = useState(Images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImage(Images[Math.floor(Math.random() * 10)]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder   text-primary-100 text-2xl  font-serif bg-primary-500  py-2">
          चरावां क्रिकेट क्लब
        </h2>

        {/* <ImageSlider /> */}
        <div className=" m-auto my-10 ">
          <Image
            className="border rounded-md shadow-lg transition-opacity ease-in-out delay-150 border-yellow-200 overflow-hidden"
            src={currImage}
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="  my-2">
        <Link
          href="/cricket"
          className=" mx-auto text-base text-primary-500 underline  hover:text-primary-500"
        >
          चरावां क्रिकेट क्लब के बारे में और जानकारी
        </Link>
      </div>
    </section>
  );
}

export default CharawanCrcketClub;
