"use client";
import React, { useState } from "react";
import { CardData } from "@/Data/cards";
import Image from "next/image";

const Cards = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveCardId(prevId => (prevId === id ? null : id)); // toggle on click
  };

  return (
    <div className="max-w-[83rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-10 mt-[60px]">
      {CardData.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-lg shadow-sm">
          {/* Image section */}
          <div className="relative">
            <Image
              src={item.image}
              alt={item.text2}
              width={298}
              height={307}
              className="object-cover w-full h-auto rounded-t-lg"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-2 px-4 text-white cursor-pointer">
              <p
                className="text-lg sm:text-xl font-bold"
                onClick={() => handleClick(item.id)}
              >
                {item.text1}
              </p>
              {activeCardId === item.id && (
                <p className="text-sm sm:text-base mt-1 font-normal">
                  {item.desctription}
                </p>
              )}
            </div>
          </div>

          {/* Texts below image */}
          <div className="bg-white py-4 px-3 space-y-1 rounded-b-lg">
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
