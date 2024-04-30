import React from "react";
import WhatsappIcon from "../icons/WhatsappIcon";

function GroupBanner() {
  return (
    <div className="md:h-[400px] h-[200px] bg-primary-500 w-full flex justify-center items-center">
      <div className="flex gap-2 items-center">
        <WhatsappIcon className="text-3xl" />
        <h2 className="text-4xl font-extrabold text-white">व्हाट्सप्प ग्रुप</h2>
      </div>
    </div>
  );
}

export default GroupBanner;
