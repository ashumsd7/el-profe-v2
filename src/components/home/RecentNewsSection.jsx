import React from "react";
import Divider from "../base/Divider";
import InfoIcon from "../icons/InfoIcon";
import Image from "next/image";
import TimeIcon from "../icons/TimeIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import FacebookIcon from "../icons/FacebookIcon";
import ShareIcon from "../icons/ShareIcon";

function RecentNewsSection() {
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder border-r-4 border-yellow-500  text-primary-200 text-2xl  font-serif bg-secondary-800  py-2">
          चरावां : नोटिफिकेशन
        </h2>
        <div
          className="h-[350px] border-r-4 border-yellow-500 shadow-md   flex flex-col gap-2 overlfow-y-auto rounded-md rounded-t-none "
          style={{
            overflowY: "scroll",
            height: "400px",
          }}
        >
          <div className="mb-4" />
          {[1, 2, 2, 36].map((item) => {
            return (
              <div
                key={item}
                className="flex my-2 align-center px-6  border-b border-yellow-100"
              >
                {/* image + time + name */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
                  <Image
                    alt="profile-pic-admin"
                    src="https://placebeard.it/250/250/"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col  border-yellow-50  w-full rounded-sm py-1 pr-1 pl-2">
                  {/* time and name */}
                  <div className="flex justify-between">
                    <h4 className="text-base font-bold -mt-1 ">Ashik Kumar</h4>
                    <div className="flex gap-2">
                      <WhatsappIcon className="cursor-pointer" />
                      <FacebookIcon />
                      <ShareIcon />
                    </div>
                  </div>
                  <div className="text-xs items-center font-sans font-extralight flex gap-1">
                    <TimeIcon /> 2hrs pahle
                  </div>
                  <p className="text-base">
                    आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया
                    टुडे ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक
                    देखे जाने वाले{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentNewsSection;
