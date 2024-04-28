import React from "react";
import LinkButton from "../base/LinkButton";
import HomeIcon from "../icons/HomeIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import AndroidApkIcon from "../icons/AndroidApkIcon";

function FooterLinksAndAbout() {
  return (
    <div className="flex flex-col gap-2 m-auto  my-4 bg-home-page bg-primary-500">
      <h1 className="text-5xl font-semibold text-center text-yellow-800">
        मेरा चरावां
      </h1>
      <p className="text-center px-10 text-xl font-serif tracking-wide">
        लगभग 2000 से ज्यादा आबादी वाला 5 पुरवा का ये गांव उत्तर प्रदेश के
        अयोध्या जिले के बीकापुर तहसील के 9 किलोमीटर दक्षिण पूर्व की ओर बसा है
        चरावां के पडोसी गांव बेनीगद्दोपुर ,बरांव, कोदैला हैं चरावां में लगभग 350
        से ज्यादा घर है। चरावां के प्रधान जो अभी 2021 के आम चुनाव में चुने गए
        हैं{" "}
        <span className="text-primary-500 font-extrabold font-mono">
          अनिल कुमार जी
        </span>{" "}
        है बी डी सी का पद{" "}
        <span className="text-primary-500 font-extrabold font-mono">
          अनीस तिवारी{" "}
        </span>
        जी के पास है तो वहीँ कोटा सम्बंधित काम
        <span className="text-primary-500 font-extrabold font-mono">
          {" "}
          अमित मौर्या{" "}
        </span>{" "}
        जी सम्हाल रहे हैं चरावां एक चौराहा है जिसके चार रास्ते क्रमशः रामपुर भगन
        बीकापुर धर्मगंज और जानेबाज़ार को जोड़ते है |
      </p>
      <div className="flex justify-center my-2 gap-4">
        <InstagramIcon className="text-3xl" />
        <FacebookIcon className="text-3xl" />
        <WhatsappIcon className="text-3xl" />
        <AndroidApkIcon className="text-3xl" />
      </div>
    </div>
  );
}

export default FooterLinksAndAbout;
