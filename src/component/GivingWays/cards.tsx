"use client";
import React from "react";
import { CardData } from "@/Data/cards";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="max-w-[83rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-10 mt-[60px]">
      {CardData.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-lg shadow-sm group">
          {/* Image section */}
          <div className="relative">
            <Image
              src={item.image}
              alt={item.text2}
              width={298}
              height={307}
              className="object-cover w-full h-auto rounded-t-lg"
            />

            {/* Overlay: Appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-2 px-4 text-white group-hover:block hidden">
              <p className="text-lg sm:text-xl font-bold">{item.text1}</p>
              <p className="text-sm sm:text-base mt-1 font-normal group-hover:block hidden">
                {item.desctription}
              </p>
            </div>
          </div>

          {/* Texts below image */}
          <div className="bg-white py-4 px-3 space-y-1 rounded-b-lg">
            {/* Heading stays visible */}
            <p className="text-lg sm:text-xl font-bold text-[#621843]">{item.text1}</p>

            {/* Description shows up only on hover */}
            <p className="text-sm sm:text-base font-normal text-[#621843] group-hover:block hidden mt-1">
              {item.desctription}
            </p>

            <p className="text-base sm:text-lg font-medium text-[#621843]">{item.text2}</p>
            <p className="text-base sm:text-lg font-medium text-[#621843]">{item.text3}</p>
            <p className="text-base sm:text-lg font-medium text-[#621843]">{item.text4}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
