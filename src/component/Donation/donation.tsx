"use client";
import { useState } from "react";
import Image from "next/image";
import { donationAmounts } from "@/Data/donationform";
import PngIcons from "@/Icons/pngIcons";

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-6 items-stretch">
        {/* Left Image Column (7/12) */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <div className="relative w-full h-[500px] overflow-hidden rounded">
            <Image
              src={PngIcons.donate}
              alt="Donation Impact"
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Impact Text under the image */}
          <div className="text-left px-1">
            <p className="text-xl font-normal text-gray-700 mb-4">
              Your impact will help provide essential healthcare services to communities that need them most.
              Your generosity directly impacts the lives of individuals across Africa.
            </p>
            <p className="text-[20px] font-normal text-gray-600">
              From training healthcare workers to building medical facilities and providing life-saving
              treatments, your support enables us to continue our vital work and expand our reach.
            </p>
          </div>
        </div>

        {/* Right Donation Form (5/12) */}
        <div className="md:col-span-5 bg-white rounded-xl shadow-xl p-8 flex flex-col ">
          <div>
            <div className="border-l-4 border-l-[#FE9430] ">

              <h2 className="text-[48px] font-extrabold text-[#621843] ps-3">D<span className="text-[#FE9430]">o</span>nate N<span className="text-[#FE9430]">o</span>w</h2>

              <p className="text-gray-600 text-[22px] mb-6 font-semibold ps-3">MAKE A DIFFERENCE TODAY</p>
            </div>
            {/* Tabs */}
            <div className="flex gap-6 mb-6 text-center">
              <button className="text-[#621843] font-bold border-2 px-8 py-2 border-[#621843] bg-[#FAEBF4]">
                One Time
              </button>
              <button className="text-gray-400 font-medium">Monthly</button>
            </div>

            {/* Amounts */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {donationAmounts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleAmountClick(item.value)}
                  className={`border px-4 py-2 rounded ${selectedAmount === item.value
                      ? "bg-[#621843] text-white"
                      : "text-gray-700 text-[18px] font-semibold"
                    }`}
                >
                  ${item.value.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="flex items-center rounded-lg gap-3 mb-6 border-2 border-[#B3B3B3] px-2">
              <span className="absolute text-[#621843] text-[18px]">
                $
              </span>
              <input
                type="number"
                placeholder="Enter Custom Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full py-3 pl-4 outline-none "
              />
              <select className="border-l-2 border-l-[#B3B3B3] text-[#621843] text-[18px] font-bold py-2 px-2 rounded text-gray-600">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-[#621843] text-[24px] font-semibold text-white py-3 mt-5 rounded-full hover:bg-[#4e1334] transition">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
