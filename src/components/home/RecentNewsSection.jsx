import React, { useEffect, useState } from "react";
import Image from "next/image";
import TimeIcon from "../icons/TimeIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import FacebookIcon from "../icons/FacebookIcon";
import ShareIcon from "../icons/ShareIcon";
import axios from "axios";

function RecentNewsSection() {
  const [allNotifications, setAllNotifications] = useState([]);

  function calculateTimeago(date) {
    let seconds = Math.floor((Date.now() - date) / 1000);
    let unit = " सेकंड ";
    let direction = "पहले ";
    if (seconds < 0) {
      seconds = -seconds;
      direction = "from now";
    }
    let value = seconds;
    if (seconds >= 31536000) {
      value = Math.floor(seconds / 31536000);
      unit = "  साल";
    } else if (seconds >= 86400) {
      value = Math.floor(seconds / 86400);
      unit = "दिन";
    } else if (seconds >= 3600) {
      value = Math.floor(seconds / 3600);
      unit = " घण्टे ";
    } else if (seconds >= 60) {
      value = Math.floor(seconds / 60);
      unit = "मिनट";
    }
    if (value != 1) unit = unit + "";
    return value + " " + unit + " " + direction;
  }

  async function loadNotifications() {
    const allNews = [];
    const res = await axios.get(
      "https://charawan-notification-default-rtdb.firebaseio.com/Notification.json"
    );
    console.log("res 1223", res.data);
    for (let i in res.data) {
      res.data[i].key = i;
      allNews.push(res.data[i]);
    }
    setAllNotifications(allNews);
    for (let i in allNews) {
      let currentStamp = new Date().getTime() - allNews[i].timeStamp;

      let difference = calculateTimeago(Date.now() - currentStamp);
      allNews[i].timeStamp2 = difference;
    }

    return {
      props: {
        notifications: allNews,
      },
    };
  }
  useEffect(() => {
    loadNotifications();
    return () => {};
  }, []);
  return (
    <section className="">
      <div className="-mx-2 ">
        <h2 className="text-center font-extrabold text-primary-100  border-r-4 border-yellow-500   text-2xl  font-serif bg-primary-500  py-2">
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
          {allNotifications?.reverse()?.map((item) => {
            return (
              <div
                key={item}
                className="flex my-2 align-center px-6  border-b border-yellow-100"
              >
                {/* image + time + name */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500">
                  <Image
                    alt="profile-pic-admin"
                    src="https://i.ibb.co/Mh6KysC/Screenshot-2024-04-29-at-4-53-50-PM.png"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col  border-yellow-50  w-full rounded-sm py-1 pr-1 pl-2">
                  {/* time and name */}
                  <div className="flex justify-between">
                    <h4 className="text-base font-bold -mt-1 ">
                      {item?.reporterName}
                    </h4>
                    <div className="flex gap-2">
                      <WhatsappIcon className="cursor-pointer" />
                      <FacebookIcon />
                      <ShareIcon />
                    </div>
                  </div>
                  <div className="text-xs items-center font-sans font-extralight flex gap-1">
                    <TimeIcon /> {item?.timeStamp2}
                  </div>
                  <p className="text-base">{item?.shortInfo}</p>
                  <p className="text-base">{item?.detailedInfo}</p>

                  <div className="flex gap-2">
                    {item.img1 && (
                      <Image
                        width="200"
                        height="200"
                        src={item.img1}
                        className="border rounded-md shadow-lg border-yellow-200 overflow-hidden"
                        alt={item.reporterName}
                      />
                    )}
                    {item.img2 && (
                      <Image
                        width="200"
                        height="200"
                        className="border rounded-md shadow-lg border-yellow-200 overflow-hidden"
                        src={item.img2}
                        alt={item.reporterName}
                      />
                    )}
                  </div>
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
