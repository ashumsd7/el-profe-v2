import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./image-slider";
function FirstPage() {
  return (
    <div className="grid md:grid-cols-1 grid-cols-1 gap-10">
      {/* <div>Hello</div> */}
      <ImageSlider />
    </div>
  );
}

export default FirstPage;
