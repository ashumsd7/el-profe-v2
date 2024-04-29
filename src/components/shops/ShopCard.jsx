import React, { useState } from "react";
import Button from "../base/Button";
import CallIcon from "../icons/CallIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import MapIcon from "../icons/MapIcon";
import WebSiteIcon from "../icons/WebSiteIcon";
import ShareIcon from "../icons/ShareIcon";
import Image from "next/image";
import { getShopTitleByTags } from "@/utils/constant";

function ShopCard({ data }) {
  const [isShowingInfo, setIsShowingInfo] = useState(false);
  return (
    <div className="bg-white flex-col gap-2 mt-16 rounded-lg shadow-md py-2 flex justify-center  items-center px-4 relative mx-auto min-h-36 min-w-[330px] md:max-w-[340px]  ">
      <div className="absolute  top-[-40px] rounded-full h-24 w-24 overflow-hidden">
        <Image
          src={data.ownerPhoto}
          width="120"
          height="120"
          alt="owner photo"
          className="rounded-full object-center overflow-hidden border border-primary-100 shadow-md"
        />
      </div>

      <div className="h-[50px]"></div>
      {/* name+ in charawan */}
      <div className="flex justify-between ">
        <h3 className="text-xl font-semibold">{data.shopName}</h3>
      </div>
      {/* tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        {getShopTitleByTags(data?.shopType)?.map((type) => {
          return (
            <span className="px-2 py-[.5px] text-xs border rounded-md text-yellow-50 border-yellow-100  bg-primary-900 text-black">
              {type}
            </span>
          );
        })}
      </div>
      {/* location */}
      {data?.villageName ||
        (data?.shopAddress && (
          <h4 className="text-sm font-normal text-center">
            {data?.villageName}, {data?.shopAddress}
          </h4>
        ))}
      {/* time */}
      {data?.openTime && data?.closeTime && (
        <span className="px-2 py-[.5px] text-xs border rounded-md border-yellow-100  bg-primary-100 text-black">
          {data?.openTime} बजे से -{data?.closeTime} बजे तक
        </span>
      )}

      {!isShowingInfo ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          {/* dexc */}
          <div className="text-base tracking-wide text-center">
            {data.shopInfo && data.shopInfo.substring(0, 30) + "..."}
            {data.shopInfo && (
              <span
                className="text-primary-600 underline text-xs cursor-pointer"
                onClick={() => {
                  setIsShowingInfo(true);
                }}
              >
                और देखें{" "}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          {data.shopInfo}{" "}
          <span
            className="ml-4 text-primary-600 underline text-xs"
            onClick={() => {
              setIsShowingInfo(false);
            }}
          >
            ठीक है
          </span>
        </div>
      )}
      <div className="flex gap-2">
        {data?.mobileNumber != "tel:+91" && (
          <Button mo={data?.mobileNumber}>
            <a
              class="text-decoration-none text-white flex items-center"
              href={data?.mobileNumber}
            >
              <CallIcon /> फ़ोन करें
            </a>
          </Button>
        )}
        {data?.mobileNumber2 !== "tel:+91" && (
          <Button>
            <a
              class="text-decoration-none text-white flex items-center"
              href={data?.mobileNumber2}
            >
              <CallIcon /> फ़ोन करें
            </a>
          </Button>
        )}
      </div>
      <div className="border-b border-primary-100 w-full"></div>
      <div className="flex justify-between w-full my-2 gap-4">
        <div className="flex gap-4">
          <InstagramIcon className="text-2xl" />
          <FacebookIcon className="text-2xl" />
          <WhatsappIcon className="text-2xl" />
          <MapIcon className="text-2xl" />
          <WebSiteIcon className="text-2xl" />
        </div>
        <ShareIcon className="text-2xl" />
      </div>
    </div>
  );
}

export default ShopCard;
