import Image from "next/image";
import React from "react";
import Button from "../base/Button";
import CallIcon from "../icons/CallIcon";

function CharawanRepresentatives() {
  return (
    <section className="my-4  ">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder text-primary-200 text-2xl  font-serif bg-secondary-800  py-2">
          चरावां के प्रतिनिधि
        </h2>

        <div className="md:grid-cols-3 grid grid-cols-1">
          <div className="shadow-md px-4 py-2 flex flex-col gap-2 items-center justify-center">
            {/* photo */}
            <div>
              <Image
                src="https://i.ibb.co/Vw20jjS/anil005018092021.jpg"
                alt="pradhan photo"
                width={180}
                height={180}
                className="shadow-md border-4 border-yellow-300 rounded-full"
              />
            </div>
            {/* name */}
            <h2 className="text-2xl flex items-center gap-1  font-bold text-yellow-500 ">
              अनिल कुमार{" "}
              <span className="text-xl  font-bold text-secondary-600 ">
                ( ग्राम प्रधान चरावां)
              </span>
            </h2>

            <Button>
              <CallIcon className="text-primary-50 text-xl" />
              फोन करें
            </Button>
          </div>
          <div className="shadow-md  px-4 py-2 flex flex-col gap-2 items-center justify-center">
            {/* photo */}
            <div>
              <Image
                src="https://i.ibb.co/JQNw2XM/anil003918092021.jpg"
                alt="pradhan photo"
                width={180}
                height={180}
                className="shadow-md border-4 border-yellow-300 rounded-full"
              />
            </div>
            {/* name */}
            <h2 className="text-2xl flex items-center gap-1  font-bold text-yellow-500 ">
              अनीस तिवारी{" "}
              <span className="text-xl  font-bold text-secondary-600 ">
                ( बी डी सी चरावां)
              </span>
            </h2>

            <Button>
              <CallIcon className="text-primary-50 text-xl" />
              फोन करें
            </Button>
          </div>
          <div className="shadow-md px-4 py-2 flex flex-col gap-2 items-center justify-center">
            {/* photo */}
            <div>
              <Image
                src="https://i.ibb.co/5FGTrtc/mauryaamit.jpg"
                alt="pradhan photo"
                width={180}
                height={180}
                className="shadow-md border-4 border-yellow-300 rounded-full"
              />
            </div>
            {/* name */}
            <h2 className="text-2xl flex items-center gap-1  font-bold text-yellow-500 ">
              अमित मौर्या{" "}
              <span className="text-xl  font-bold text-secondary-600 ">
                (कोटेदार चरावां)
              </span>
            </h2>

            {/* post */}

            {/* about   */}
            {/* contact */}
            <Button>
              <CallIcon className="text-primary-50 text-xl" />
              फोन करें
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharawanRepresentatives;
