"use client";
import React from "react";
import { CardData } from "@/Data/cards";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="max-w-[83rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-[60px]">
      {CardData.map((item) => (
        <div key={item.id} className="overflow-hidden group">
          {/* Image section with overlayed text1 (clickable) */}
          <div className="relative">
            <Image
              src={item.image}
              alt={item.text2}
              width={298}
              height={307}
              className="object-cover w-full h-auto rounded-t-lg"
            />

            {/* Overlay with clickable text1 (hidden on hover) */}
            <div className="absolute flex items-center bottom-0 left-0 w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-3 px-4 text-white cursor-pointer group-hover:opacity-0 transition-opacity duration-300">
              <p className="text-[25px] font-bold">{item.text1}</p>
            </div>

            {/* Overlay for description (hidden initially, shown on hover) */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-full py-4 px-4 text-white cursor-pointer">
                {/* Hover description */}
                <p className="text-[24px] font-bold pb-1">{item.text1}</p>

                <p className="text-xl font-medium">{item.description}</p>
              </div>
            </div>
          </div>

          {/* Texts below the image */}
          <div className="bg-white py-5 px-4 space-y-1 rounded-b-lg">
            <p className="text-[20px] font-medium text-[#621843]">{item.text2}</p>
            <p className="text-[20px] font-medium text-[#621843]">{item.text3}</p>
            <p className="text-[20px] font-medium text-[#621843]">{item.text4}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
