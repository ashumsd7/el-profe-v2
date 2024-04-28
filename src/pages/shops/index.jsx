import ShopCard from "@/components/shops/ShopCard";
import axios from "axios";
import React, { useState } from "react";

function ShopsPage({ shops }) {
  const [filteredShops, setFilteredShops] = useState(shops);
  return (
    <div className="flex flex-col  -mx-2">
      <div className="md:h-[400px] h-[200px] bg-primary-500 w-full flex justify-center items-center">
        <input
          disabled
          type="text"
          placeholder="नंबर, नाम ,पता लिखिए  "
          class="border  md:w-1/2 w-[80%] h-20 border-gray-300  focus:border-blue-500  border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 text-lg font-semibold"
        />
      </div>
      {/*  Cards */}
      <div className="w-full bg-[#EAEAEA]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[50px] mb-10">
          {filteredShops?.reverse().map((data) => {
            return <ShopCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopsPage;

export async function getStaticProps() {
  const allShopData = [];
  const res = await axios.get(
    "https://charwan-shops-default-rtdb.firebaseio.com/charawan-shops.json"
  );
  for (let i in res.data) {
    res.data[i].key = i;
    allShopData.push(res.data[i]);
  }
  return {
    props: {
      shops: allShopData,
    },
  };
}
