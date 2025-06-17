"use client";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import { initiatives } from "@/Data/causes";

const InitiativesSection = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {initiatives.map((item) => (
        <div key={item.id} className="mb-6">
          {activeId === item.id ? (
            <div className="bg-[#5B123D] text-white rounded-xl p-6 shadow-md relative">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4">
                    <span className="bg-white text-[#5B123D] font-bold px-4 py-2 rounded-full">{item.id}</span>
                    <p className="text-[24px] sm:text-[36px] font-semibold">{item.title}</p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={577}
                    height={352}
                    className="rounded-xl w-full h-[190px] object-cover mt-4"
                  />
                </div>
                {/* Right */}
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                  <p className="font-extrabold text-[50px] lg:text-[70px] xl:text-[90px]">{item.stat}</p>
                  <p className="font-semibold text-[20px] lg:text-[25px] xl:text-[28px]">{item.Heading}</p>
                  <p className="text-[16px] sm:text-[20px] text-gray-50">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="absolute top-6 right-6 bg-white p-2 sm:p-3 rounded-lg">
                <RxCross2 className="text-black" />
              </button>
            </div>
          ) : (
            <div
              className="flex justify-between items-center bg-white py-4 px-5 cursor-pointer"
              onClick={() => setActiveId(item.id)} >
              <div className="flex items-center gap-4">
                <span className="bg-[#FAEBF4] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full font-bold">
                  {String(item.id).padStart(2, "0")}
                </span>
                <p className="text-[20px] sm:text-[28px] font-semibold">{item.title}</p>
              </div>
              <span className="text-2xl font-bold text-[#5B123D]">+</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default InitiativesSection;
