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
    <div className="max-w-[83rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-7">
      {CardData.map((item) => (
        <div key={item.id} className="overflow-hidden">
          {/* Image section with overlayed text1 (clickable) */}
          <div className="relative">
            <Image
              src={item.image}
              alt={item.text2}
              width={298}
              height={307}
              className="object-cover w-full h-auto rounded-t-lg"
            />

            {/* Overlay with clickable text1 and conditional description */}
            <div className="absolute bottom-0 left-0 w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md py-2 px-4 text-white cursor-pointer">
              <p
                className="text-[24px] font-bold"
                onClick={() => handleClick(item.id)}
              >
                {item.text1}
              </p>
              {activeCardId === item.id && (
                <p className="text-2xl font-normal mt-1">{item.desctription}</p>
              )}
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
