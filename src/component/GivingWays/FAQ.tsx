"use client";

import React from "react";
import { waysToGiveData } from "@/Data/faq";
import { Plus } from "lucide-react";

const FAQS = () => {
  return (
    <div className="py-[100px]">
      {/* FAQ Card Section */}
      <div className="bg-[#f97316] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToGiveData.map((item) => (
            <div key={item.id} className="text-center p-4 border-r border-r-white">
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="bg-[#621843] rounded-full p-2 inline-flex items-center justify-center">
                  <Plus className="text-white w-5 h-5" />
                </span>
                <p className="font-bold text-2xl text-[#621843]">{item.amount}</p>
              </div>
              <p className="text-lg font-medium mt-1 text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section with Background Image */}
      <div
        className="bg-cover bg-center py-20 px-6 text-white text-center"
        style={{ backgroundImage: "url('/images/waysbg.png')" }}
      >
        <h2 className="text-[32px] font-bold mb-6">Have Questions?</h2>
        <p className="max-w-xl text-2xl font-medium mx-auto mb-8">
          Our team is here to help. Contact us to learn more about ways to give or to discuss your giving options.
        </p>
        <button className="bg-[#f97316] hover:bg-orange-600 transition duration-200 py-2 px-6 rounded-full text-[24px] font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQS;
