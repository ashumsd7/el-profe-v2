import GroupBanner from "@/components/groups/GroupBanner";
import GroupCard from "@/components/groups/GroupCard";
import React from "react";

function SocialGroups() {
  const GROUPS_DATA = [
    {
      name: "चरावां | वेबसाइट हैल्पडेस्क ☎️",
      icon: "https://i.ibb.co/KXmn5cG/socialwp.png",

      link: "https://chat.whatsapp.com/EQ3yOtIvQM88XxfFGf6Vcu",
      description:
        " चरावां से सम्बंधित किसी भी जानकारी , वेबसाइट सम्बंधित किसी भी जानकारी सुधार अथवा सलाह के लिए व्हाट्सप्प ग्रुप से जुड़ें ",
      tags: ["चरावां", "वेबसाइट", "सुधार ", "सलाह", "सहायता"],
    },
    {
      name: "चरावां | समाचार 📰",
      link: "https://chat.whatsapp.com/HbbWfPcNWB90vUus5P8LIw ",
      icon: "https://i.ibb.co/KXmn5cG/socialwp.png",
      description:
        "चरावां समाचार पाएं अपने गांव के हर एक कोने की पल पल की खबर अभी जुड़ें ",
      tags: ["समाचार", "खबर"],
    },
    {
      name: "चरावां | क्रिकेट  🏏  ",
      link: "https://chat.whatsapp.com/IXbdQqaOHckBdzqBLOBRLy",
      icon: "https://i.ibb.co/KXmn5cG/socialwp.png",
      description:
        " चर्चा करिये क्रिकेट पर अपने गांव के लोगो के साथ अभी जुड़ें  ",
      tags: ["क्रिकेट", "चर्चा"],
    },
    {
      name: "चरावां | सूचना प्रसारण  🔊  ",
      icon: "https://i.ibb.co/KXmn5cG/socialwp.png",
      description:
        " पाएं अपने गांव में हो रहे कार्यक्रमों की जानकारी  सीधे अपने व्हाट्सप्प ग्रुप पर  ",
      tags: ["कार्यक्रमों", "गांव"],
    },
  ];
  return (
    <div className="flex flex-col  -mx-2">
      <GroupBanner />
      {/*  Cards */}
      <div className="w-full bg-[#EAEAEA]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[50px] mb-10 mx-4">
          {GROUPS_DATA.map((data) => {
            return <GroupCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SocialGroups;
