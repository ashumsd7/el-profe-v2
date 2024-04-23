import React from "react";
import QuickLinksCard from "./QuickLinksCard";
import Divider from "../base/Divider";

function QuickLinkSections() {
  return (
    <section>
      <div className="m-auto ">
        <h2 className="text-center font-bolder text-4xl mt-2 font-serif">
          महत्वपूर्ण लिंक
        </h2>
        <Divider className="mb-4" />
      </div>
      <div className="md:grid-cols-2  grid-cols-1 grid md:gap-4 gap-1 mt-2 md:mx-4 mx-2 ">
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
        <QuickLinksCard />
      </div>
    </section>
  );
}

export default QuickLinkSections;
