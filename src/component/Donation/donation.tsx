"use client";
import { useState } from "react";
import Image from "next/image";
import { donationAmounts } from "@/Data/donationform";
import PngIcons from "@/Icons/pngIcons";

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 px-4">
        {/* Left */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="relative h-[500px] w-full rounded overflow-hidden">
            <Image src={PngIcons.donate} alt="Donate" fill className="object-cover" />
          </div>
          <div>
            <p className="text-gray-700 text-[18px] mb-4">
              Your impact helps bring essential healthcare services to communities across Africa.
            </p>
            <p className="text-gray-600 text-[18px]">
              From training workers to providing treatments, your support helps us grow our mission.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="md:col-span-5 bg-white rounded-xl shadow-xl p-6 relative">
          <Image src={PngIcons.donate1} alt="decor" width={200} height={200} className="hidden md:block absolute bottom-0 left-0" />
          <Image src={PngIcons.donate2} alt="decor" width={100} height={100} className="hidden md:block absolute bottom-0 right-0" />
          <div className="border-l-4 border-[#FE9430] mb-4 ps-3">
            <h2 className="text-[40px] font-extrabold text-[#621843]">D<span className="text-[#FE9430]">o</span>nate N<span className="text-[#FE9430]">o</span>w</h2>
            <p className="text-gray-600 text-[20px] font-semibold">MAKE A DIFFERENCE TODAY</p>
          </div>
          <div className="flex gap-4 mb-4">
            <button className="text-[#621843] font-bold border-2 px-5 py-2 bg-[#FAEBF4] border-[#621843]">One Time</button>
            <button className="text-gray-400">Monthly</button>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {donationAmounts.map((item) => (
              <button
                key={item.id}
                onClick={() => { setSelectedAmount(item.value); setCustomAmount(""); }}
                className={`px-4 py-2 rounded border ${selectedAmount === item.value ? "bg-[#621843] text-white" : "text-gray-700 font-semibold"}`}
              >
                ${item.value}
              </button>
            ))}
          </div>
          <div className="flex items-center border-2 border-[#B3B3B3] rounded-lg gap-2 px-3 mb-5">
            <span className="text-[#621843]">$</span>
            <input
              type="number"
              placeholder="Enter Custom Amount"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
              className="w-full py-3 outline-none"
            />
            <select className="border-l-2 border-[#B3B3B3] text-[#621843] font-bold px-2">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <button className="w-full bg-[#621843] text-white py-3 rounded-full text-[20px] hover:bg-[#4e1334]">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default DonateSection;
