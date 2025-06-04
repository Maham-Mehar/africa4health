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
            // Show expanded content
            <div className="bg-[#5B123D] text-white rounded-xl p-6 mb-4 shadow-md">
              <div className="flex flex-col md:w-[150vh] md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col items-start">
                  <div className="flex items-start gap-6 ">
                    <div className="mt-5">
                      <span className="text-[19px] font-bold bg-white text-[#5B123D] font-bold px-[18px] py-3 rounded-full mb-2">
                        {item.id}
                      </span>
                    </div>
                    <div>
                      <p className="mt-2 font-semibold leading-13 text-[36px] pb-4">{item.title}</p>
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={577}
                    height={352}
                    className="rounded-xl w-[530px] h-[190px] object-cover"
                  />
                </div>
                <div>
                  <p className="font-extrabold text-[90px] ">{item.stat}</p>
                  <p className="font-semibold text-[28px]">{item.Heading}</p>
                  <p className="text-[20px] font-normal text-gray-50 max-w-lg">{item.description}</p>
                </div>

              </div>
              <button
                onClick={() => toggleInitiative(item.id)}
                className="absolute top-4 right-4 text-white text-xl bg-white py-3 mt-3 px-3 text-black rounded-lg "
              >
                <RxCross2 className="text-black" />
              </button>
            </div>
          ) : (
            // Show collapsed toggle
            <div
              className="flex justify-between items-center bg-white py-4 px-5 cursor-pointer"
              onClick={() => toggleInitiative(item.id)}
            >
              <div className="flex items-center gap-4">
                <span className="bg-[#FAEBF4] text-[19px] w-12 h-12 flex items-center justify-center rounded-full font-bold ">
                  {String(item.id).padStart(2, "0")}
                </span>
                <p className="font-semibold text-[28px] text-black">{item.title}</p>
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
