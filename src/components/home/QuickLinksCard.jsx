import Link from "next/link";
import React from "react";
import ShopIcon from "../icons/ShopIcon";

function QuickLinksCard() {
  return (
    <Link href={"/"}>
      <div className="bg-primary-400 border border-4 grid grid-cols-2 px-2 py-4 rounded-sm shadow-md border-secondary-400">
        <ShopIcon className="text-4xl  " />
        <h1 className="font-bolder text-3xl">Shops</h1>
      </div>
    </Link>
  );
}

export default QuickLinksCard;
