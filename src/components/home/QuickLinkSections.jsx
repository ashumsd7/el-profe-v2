import React from "react";
import QuickLinksCard from "./QuickLinksCard";
import Divider from "../base/Divider";
import WhatsappIcon from "../icons/WhatsappIcon";
import FacebookIcon from "../icons/FacebookIcon";
import ShareIcon from "../icons/ShareIcon";
import TimeIcon from "../icons/TimeIcon";
import Image from "next/image";
import Link from "next/link";

function QuickLinkSections() {
  return (
    <section className="  ">
      <div className="-mx-2 ">
        <h2 className="text-center font-extrabold text-primary-100 text-2xl  font-serif bg-primary-500  py-2">
          महत्वपूर्ण लिंक
        </h2>
        <div
          className="h-[350px] shadow-md  flex flex-col gap-2 overlfow-y-auto rounded-md mt-2"
          style={{
            overflowY: "scroll",
            height: "400px",
          }}
        >
          <div className="mb-4" />
          {[1, 2, 2, 3, 4, 5, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="flex  align-center px-6  border-b border-yellow-100"
              >
                {/* image + time + name */}
                {/* <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
                  <Image
                    alt="profile-pic-admin"
                    src="https://placebeard.it/250/250/"
                    width={40}
                    height={40}
                  />
                </div> */}
                <div className="flex flex-col  border-yellow-50  w-full rounded-sm py-1 pr-1 pl-2">
                  {/* time and name */}
                  {/* <div className="flex justify-between">
                    <h4 className="text-base font-bold -mt-1 ">Ashik Kumar</h4>
                    <div className="flex gap-2">
                      <WhatsappIcon className="cursor-pointer" />
                      <FacebookIcon />
                      <ShareIcon />
                    </div>
                  </div> */}
                  {/* <div className="text-xs items-center font-sans font-extralight flex gap-1">
                    <TimeIcon /> 2hrs pahle
                  </div> */}
                  <Link
                    href={"/"}
                    className="text-base cursor-pointer text-[#0000EE] underline font-bold tracking-wide "
                  >
                    व्हाट्सप्प ग्रुप जॉइन करें
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickLinkSections;
