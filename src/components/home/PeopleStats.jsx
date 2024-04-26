import React from "react";
import HomeIcon from "../icons/HomeIcon";
import TwoMenIcon from "../icons/TwoMenIcon";
import PopulationIcon from "../icons/PopulationIcon";
import TwoWomenIcon from "../icons/TwoWomenIcon";
import ChildrenIcon from "../icons/ChildrenIcon";
import Areaicon from "../icons/Areaicon";
import Divider from "../base/Divider";

function PeopleStats() {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 -mx-2 justify-center items-center py-4 md:px-10 px-2 gap-10  ">
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <HomeIcon className="text-primary-500 text-6xl" />
            <div className="flex flex-col">
              <p className=""> 313+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                घर
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <PopulationIcon className="text-primary-500 text-8xl" />
            <div className="flex flex-col">
              <p className=""> 2000+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                लोग
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <TwoWomenIcon className="text-primary-500 text-6xl" />
            <div className="flex flex-col">
              <p className=""> 800+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                महिलाएं
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <TwoMenIcon className="text-primary-500 text-6xl" />
            <div className="flex flex-col">
              <p className=""> 850+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                पुरुष
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <ChildrenIcon className="text-primary-500 text-6xl" />
            <div className="flex flex-col">
              <p className=""> 220+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                {" "}
                बच्चे
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2   items-center justify-center text-4xl">
          <div className="flex gap-2 items-center">
            <Areaicon className="text-primary-500 text-6xl" />
            <div className="flex flex-col">
              <p className=""> 160+</p>
              <p className="text-base text-secondary-700 font-bold text-center">
                क्षेत्रफल (हे०)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider className="-mx-2" />
    </>
  );
}

export default PeopleStats;
