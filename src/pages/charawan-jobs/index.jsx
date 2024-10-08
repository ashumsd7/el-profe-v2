import PageBanner from "@/components/base/PageBanner";
import React from "react";

function Jobs() {
  return (
    <div className="-mx-2">
      <PageBanner>
        <div class="flex flex-col items-center justify-center min-h-screen">
          <div class="max-w-2xl p-8 bg-white shadow-md">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              अब आपका गाँव, आपकी खबरें!
            </h1>
            <p class="text-lg text-gray-700 mb-4">
              हमें आपके गाँव के पार्ट टाइम रिपोर्टर की तलाश है। काम करें और
              महीने के लिए{" "}
              <span className="p-2 bg-primary-500 text-white rounded-sm ">
                ₹3000
              </span>{" "}
              तक कमाएँ!
            </p>
            <p class="text-lg text-gray-700 mb-4">
              अब आप अपने गाँव के खबरों को पोस्ट करें और पार्ट टाइम पैसे कमाएँ।
              हमें गर्व होगा आपके साथ काम करने पर।
            </p>

            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              आपका पार्ट टाइम काम क्या होगा?
            </h2>
            <p class="text-lg text-gray-700 mb-4">
              आपको करना होगा दिन के 5 से 10 WhatsApp/instagram/facebook/twitter
              पोस्ट, जिसमें गाँव के रिपोर्टर जैसा काम करना होगा। कुछ फोटो और
              शब्दों के माध्यम से आपको दिन में 5 से 10 पोस्ट करने होंगे। प्रति
              पोस्ट से आप 5 से 10 रुपये कमा सकते हैं।
            </p>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
              पदों की संख्या : 1
            </h2>

            <h2 class="text-2xl font-extrabold text-gray-700 mb-4 underline text-blue">
              <a href="tel:918303723003"> संपर्क करें:</a>
            </h2>
          </div>
        </div>
      </PageBanner>
    </div>
  );
}

export default Jobs;
