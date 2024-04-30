import Image from "next/image";
import React from "react";
import Button from "../base/Button";
import CallIcon from "../icons/CallIcon";
import Link from "next/link";

function CharawanRepresentatives() {
  const PRADHAN_NUMBER = "tel:+919839018844";
  const KOTEDAR_NUMBER = "tel:+919628771123";
  return (
    <section className="my-4  ">
      <div className="-mx-2 ">
        <h2 className="text-center font-bolder text-primary-100 text-2xl  font-serif bg-primary-500  py-2">
          चरावां के प्रतिनिधि
        </h2>

        <div className="md:grid-cols-3 grid grid-cols-1">
          <div className="shadow-md px-4 py-2 flex flex-col gap-2 items-center justify-center bg-home-page">
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
              <span className="text-base  font-bold text-secondary-500 ">
                ( ग्राम प्रधान चरावां)
              </span>
            </h2>
            {/* <p className="text-center md:w-2/3 w-full text-primary-900 font-mono">
              आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया टुडे
              ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे जाने
              वाले आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया
              टुडे ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे
              जाने वाले
            </p> */}

            <Link href={PRADHAN_NUMBER}>
              <Button>
                <CallIcon className="text-primary-50 text-xl" />
                फोन करें
              </Button>
            </Link>
          </div>
          <div className="shadow-md  px-4 py-2 flex flex-col gap-2 items-center justify-center bg-home-page">
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
              <span className="text-base  font-bold text-secondary-500 ">
                ( बी डी सी चरावां)
              </span>
            </h2>
            {/* <p className="text-center  md:w-2/3 w-full text-primary-900 font-mono">
              आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया टुडे
              ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे जाने
              वाले आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया
              टुडे ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे
              जाने वाले
            </p> */}

            <Button disabled>
              <CallIcon className="text-primary-50 text-xl" />
              फोन करें
            </Button>
          </div>
          <div className="shadow-md px-4 py-2 flex flex-col gap-2 items-center justify-center bg-home-page">
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
              <span className="text-base  font-bold text-secondary-500 ">
                (कोटेदार चरावां)
              </span>
            </h2>

            {/* post */}

            {/* about   */}
            {/* <p className="text-center  md:w-2/3 w-full text-primary-900 font-mono">
              आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया टुडे
              ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे जाने
              वाले आज तक एक हिन्दी समाचार टी वी चैनल है। इसका स्वामित्व इण्डिया
              टुडे ग्रुप नेटवर्क लिमिटेड के पास है। आज तक भारत के सर्वाधिक देखे
              जाने वाले
            </p> */}
            {/* contact */}
            <Link href={KOTEDAR_NUMBER}>
              <Button>
                <CallIcon className="text-primary-50 text-xl" />
                फोन करें
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharawanRepresentatives;
