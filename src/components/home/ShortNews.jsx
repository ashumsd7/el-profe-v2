import React from "react";

function ShortNews() {
  return (
    <div className="flex -mx-2 h-[40px]  items-center justify-center bg-secondary-800  ">
      <div className="flex justify-center items-center text-xl px-2 text-primary-50">
        {" "}
        सूचनायें :
      </div>
      <div className="bg-secondary-800 - flex-1 items-center justify-center ">
        <marquee className="text-white text-xl mt-1 ">
          समाचार प्रस्तुतकर्ता, अर्थव्यवस्था, राजनीति और खेल से संबंधित नवीनतम
          समाचारों और घटनाक्रमों की जानकारी पेश करते हैं।
        </marquee>
      </div>
    </div>
  );
}

export default ShortNews;
