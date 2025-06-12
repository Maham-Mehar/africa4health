"use client";
import PngIcons from "@/Icons/pngIcons";
import { Plus } from "lucide-react"; 
import React from "react";

// Type for the data
type WayToGive = {
  id: number;
  amount: string;
  description: string;
};

// Data array
const waysToGiveData: WayToGive[] = [
  { id: 1, amount: "$50 provides", description: "Essential medical supplies for a community health worker" },
  { id: 2, amount: "$100 provides", description: "Training for a healthcare worker to serve their community" },
  { id: 3, amount: "$500 provides", description: "Essential medical equipment for a rural health clinic" },
  { id: 4, amount: "$1000 provides", description: "Support for a mobile health clinic serving remote communities" },
];

const ContactAbout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={PngIcons.Contact}
            alt="Contact About"
            className="rounded-lg w-full h-full max-h-[630px] object-cover"
          />
        </div>

        {/* Right Info Cards Section */}
        <div className="rounded-lg flex flex-col justify-center">
          {waysToGiveData.map((item) => (
            <div key={item.id} className="text-white mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#621843] rounded-full p-2 inline-flex items-center">
                  <Plus className="text-white w-5 h-5" />
                </span>
                <p className="font-bold text-[#621843] text-2xl sm:text-3xl md:text-[40px]">{item.amount}</p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAbout;
