import React from "react";

function PageBanner({ icon, name, children }) {
  return (
    <div className="md:h-full min-h-[400px] bg-primary-500 w-full flex justify-center items-center -mx-2">
      <div className="flex gap-2 items-center">
        {icon}
        <h2 className="text-4xl font-extrabold text-white">{name}</h2>
        {children}
      </div>
    </div>
  );
}

export default PageBanner;
