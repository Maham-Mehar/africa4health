"use client";

import OurCommunity from "@/component/viewAll/community";
import Updates from "@/common/titlecards";
import { Fragment, useState } from "react";
import { newsTabs } from "@/Data/news";
import { cardData } from "@/Data/updates";
const ViewAll = () => {
  const [activeTab, setActiveTab] = useState("Education");

  // Filter data based on active tab
  const filteredData = cardData.filter(item =>
    item.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <Fragment>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mt-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#621843]">
            News <span className="text-[#F37021]">&</span> Updates
          </h2>
          <p className="text-[#1A1A1A] mt-2 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto py-2">
            Stay Informed: Latest News and Updates on Our Impact Across Africa
          </p>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-5 text-[15px] sm:text-lg md:text-xl font-bold">
            {newsTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.label)}
                className={`pb-1 transition hover:cursor-pointer ${activeTab === tab.label
                  ? "text-[#621843] border-b-2 border-[#621843]"
                  : "text-gray-500"
                  }`} >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Display filtered updates */}
        <Updates cardData={filteredData} />
      </div>
      <OurCommunity />
    </Fragment>
  )
}
export default ViewAll;