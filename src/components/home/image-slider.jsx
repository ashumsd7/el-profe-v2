import React from "react";

import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function ImageSlider() {
  return (
    <>
      <div className="h-[70vh] overflow-scroll  border-4 -mt-1 -mx-2 border-primary-800 border-b-0">
        <Gallery photos={photos} direction={"column"} />
      </div>
    </>
  );
}

export default ImageSlider;
