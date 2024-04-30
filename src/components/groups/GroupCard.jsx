import Image from "next/image";
import React from "react";
import Button from "../base/Button";

function GroupCard({ data }) {
  return (
    <div className="bg-white flex-col gap-2 pb-4 mt-16 rounded-lg shadow-md py-2 flex justify-center  items-center px-4 relative mx-auto min-h-36 min-w-[330px] md:max-w-[340px]  ">
      <div className="absolute  top-[-40px] rounded-full h-24 w-24 overflow-hidden">
        <Image
          src={data.icon}
          width="120"
          height="120"
          alt="owner photo"
          className="rounded-full object-center overflow-hidden  shadow-md"
        />
      </div>

      <div className="h-[50px]"></div>
      {/* name */}
      <div className="flex justify-between ">
        <h3 className="text-xl font-semibold">{data.name}</h3>
      </div>
      {/* tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {data?.tags?.map((type) => {
          return (
            <span className="px-2 py-[.5px] text-xs border rounded-md  border-yellow-50  bg-primary-900 text-yellow-300">
              {type}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        {/* desc */}
        <div className="text-base tracking-wide text-center">
          {data.description}
        </div>
      </div>

      <div className="flex gap-2">
        <Button mo={data?.mobileNumber}>
          <a
            class="text-decoration-none text-white flex items-center"
            href={data?.link}
          >
            ग्रुप से जुड़ें
          </a>
        </Button>
      </div>
    </div>
  );
}

export default GroupCard;
