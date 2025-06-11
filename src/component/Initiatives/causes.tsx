"use client";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import { initiatives } from "@/Data/causes";

const InitiativesSection = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleInitiative = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {initiatives.map((item) => (
        <div key={item.id} className="mb-6 relative">
          {activeId === item.id ? (
            <div className="bg-[#5B123D] text-white rounded-xl p-6 mb-4 shadow-md relative">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
                {/* Left Section */}
                <div className="flex flex-col items-start w-full lg:w-1/2">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-[16px] sm:text-[19px] font-bold bg-white text-[#5B123D] px-4 py-2 sm:px-[18px] sm:py-3 rounded-full">
                      {item.id}
                    </span>
                    <p className="font-semibold leading-snug text-[24px] sm:text-[36px]">
                      {item.title}
                    </p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={577}
                    height={352}
                    className="rounded-xl w-full sm:w-[530px] h-[180px] sm:h-[190px] object-cover mt-4"
                  />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start mt-6 lg:mt-0">
                  <p className="font-extrabold text-[45px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[90px]">
                    {item.stat}
                  </p>
                  <p className="font-semibold text-[20px] md:text-[23px] lg:text-[25px] xl:text-[28px] mb-2 sm:mb-3">
                    {item.Heading}
                  </p>
                  <p className="text-[16px] sm:text-[20px] font-normal text-gray-50 max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Close Button (Top Right aligned with ID) */}
              <button
                onClick={() => toggleInitiative(item.id)}
                className="absolute top-6 right-6 text-white text-xl bg-white p-2 sm:p-3 text-black rounded-lg"
              >
                <RxCross2 className="text-black" />
              </button>
            </div>
          ) : (
            <div
              className="flex justify-between items-center bg-white py-4 px-5 cursor-pointer flex-wrap sm:flex-nowrap"
              onClick={() => toggleInitiative(item.id)}
            >
              <div className="flex items-center gap-4">
                <span className="bg-[#FAEBF4] text-[16px] sm:text-[19px] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full font-bold">
                  {String(item.id).padStart(2, "0")}
                </span>
                <p className="font-semibold text-[20px] sm:text-[28px] text-black">{item.title}</p>
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
