import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function ImageSlider() {
  function onChange() {}
  function onClickItem() {}
  function onClickThumb() {}
  return (
    <Carousel
      showIndicators={false}
      infiniteLoop={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img
          className="w-[100vw] md:h-[40vw] h-[60vw]"
          src="https://plus.unsplash.com/premium_photo-1669863284071-06345764d4c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          className="w-[100vw] md:h-[40vw] h-[60vw] "
          src="https://plus.unsplash.com/premium_photo-1669863284071-06345764d4c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          className="w-[100vw] md:h-[40vw] h-[60vw]"
          src="https://plus.unsplash.com/premium_photo-1669863284071-06345764d4c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default ImageSlider;
