"use client";
import React from "react";
import Image from "next/image";
import { healthData, HealthItem } from "@/Data/health";
import PngIcons from "@/Icons/pngIcons";

const Health = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Top-left absolute decorative image */}
      <div className="absolute top-0 left-0 z-0 w-24 sm:w-32">
        <img src={PngIcons.image1} alt="decorative" className="w-full h-auto" />
      </div>

      {/* Bottom-right absolute decorative image */}
      <div className="absolute bottom-0 right-0 z-0 w-24 sm:w-32">
        <img src={PngIcons.image2} alt="decorative" className="w-full h-auto" />
      </div>

      {/* Main content */}
      <div className="space-y-10 sm:space-y-12 relative z-10">
        {healthData.map((item: HealthItem) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* Text section */}
            <div className="max-w-2xl mb-3 px-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{item.title}</p>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700">{item.text}</p>
            </div>

            {/* Image section */}
            <div className="w-full max-w-5xl px-2">
              <Image
                src={item.image}
                alt={item.title}
                width={1100}
                height={160}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Health;
