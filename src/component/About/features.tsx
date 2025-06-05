"use client";
import React from "react";
import Image from "next/image";
import PngIcons from "@/Icons/pngIcons";
import { initiatives, Initiative } from "@/Data/features";

const Initiatives = () => {
  const sorted = [...initiatives].sort((a, b) => a.id - b.id);
  const rows: [Initiative?, Initiative?][] = [];

  for (let i = 0; i < sorted.length; i += 2) {
    rows.push([sorted[i], sorted[i + 1]]);
  }

  let contentIndex = 1;

  return (
    <div className="relative">
      <div className="absolute top-0 left-0">
              <img src={PngIcons.image1} alt="" />
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={PngIcons.image2} alt="" />
            </div>
    <section className="relative max-w-6xl mx-auto px-4 pt-10 space-y-16">
        
      {rows.map(([left, right], index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          {left?.title ? (
            <div className="pt-10">
              <p
                className={`text-xl pb-3 font-semibold border-b-2 border-b-[#D9D9D9] ${
                  left.id === 1 || left.id === 5
                    ? "text-[#621843]"
                    : left.id === 4 || left.id === 8
                    ? "text-[#FE9430]"
                    : "text-[#7F3D84]"
                }`}
              >
                {String(contentIndex++).padStart(2, "0")}
              </p>
              <h3
                className={`text-2xl md:text-3xl font-bold mt-2 ${
                  left.id === 1 || left.id === 5
                    ? "text-[#621843]"
                    : left.id === 4 || left.id === 8
                    ? "text-[#FE9430]"
                    : "text-[#5B123D]"
                }`}
              >
                {left.title}
              </h3>
              <p className="text-gray-700 mt-4 max-w-lg text-base">
                {left.description}
              </p>
            </div>
          ) : left?.image ? (
            <div className="w-full h-auto">
              <Image
                src={left.image}
                alt={`Initiative ${left.id}`}
                width={500}
                height={300}
                className=" object-cover w-full"
              />
            </div>
          ) : null}

          {/* Right Column */}
          {right?.title ? (
            <div className="pt-10">
              <p
                className={`text-xl pb-3 font-semibold border-b-2 border-b-[#D9D9D9] ${
                  right.id === 4 || right.id === 8
                    ? "text-[#621843]"
                    : right.id === 1 || right.id === 5
                    ? "text-[#FE9430]"
                    : "text-[#7F3D84]"
                }`}
              >
                {String(contentIndex++).padStart(2, "0")}
              </p>
              <h3
                className={`text-2xl md:text-3xl font-bold mt-2 ${
                  right.id === 1 || right.id === 5
                    ? "text-[#621843]"
                    : right.id === 4 || right.id === 8
                    ? "text-[#FE9430]"
                    : "text-[#5B123D]"
                }`}
              >
                {right.title}
              </h3>
              <p className="text-gray-700 mt-4 max-w-lg text-base">
                {right.description}
              </p>
            </div>
          ) : right?.image ? (
            <div className="w-full h-auto">
              <Image
                src={right.image}
                alt={`Initiative ${right.id}`}
                width={500}
                height={300}
                className=" object-cover w-full"
              />
            </div>
          ) : null}
        </div>
      ))}
    </section>
    </div>
  );
};

export default Initiatives;
