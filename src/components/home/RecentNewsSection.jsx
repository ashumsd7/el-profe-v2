import React from "react";
import Divider from "../base/Divider";
import InfoIcon from "../icons/InfoIcon";

function RecentNewsSection() {
  return (
    <section>
      <div className="m-auto  ">
        <h2 className="text-center font-bolder text-4xl mt-2 font-serif">
          चरावां : नोटिफिकेशन
        </h2>
        <div
          className="h-[350px]  flex flex-col gap-2 overlfow-y-auto"
          style={{
            overflowY: "scroll",
            height: "350px",
          }}
        >
          <Divider className="mb-4" />
          {[1, 2, 2, 3, 4, 5, 5, 6].map((item) => {
            return (
              <div key={item} className="flex gap-2 align-center">
                <InfoIcon className="text-4xl" />
                <p className="text-2xl">
                  वेबसाइट सम्ब्नधित जानकारी और फीडबैक के लिए के लिए वेबसाइट
                  हेल्प डेस्क से जुड़े
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentNewsSection;
