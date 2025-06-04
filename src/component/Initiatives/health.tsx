"use client";
import React from "react";
import Image from "next/image";
import { healthData, HealthItem } from "@/Data/health";
import PngIcons from "@/Icons/pngIcons";

const Health = () => {
  return (
    <div className="relative">
      {/* Absolute image at top-left */}
      <div className="absolute top-0 left-0">
        <img src={PngIcons.image1} alt="" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={PngIcons.image2} alt="" />
      </div>
      {/* Main content */}
      <div className="space-y-8 pt-16">
        {healthData.map((item: HealthItem) => (
          <div
            key={item.id}
            className="flex flex-col justify-center relative"
          >
            {/* Text section */}
            <div className="flex flex-col justify-center max-w-md text-center mx-auto mb-3">
              <p className="text-[34px] font-bold">{item.title}</p>
              <p className="mt-2 text-gray-700 font-normal">{item.text}</p>
            </div>

            {/* Image section */}
            <div className="flex justify-center mb-15">
              <Image
                src={item.image}
                alt={item.title}
                width={1100}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health;
