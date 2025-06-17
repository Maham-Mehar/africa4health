"use client";
import Link from "next/link";
import { waysToGiveData } from "@/Data/faq";
import { Plus } from "lucide-react";

const FAQS = () => (
  <div className="py-[100px]">
    {/* FAQ Cards */}
    <div className="bg-[#f97316] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-6">
        {waysToGiveData.map((item) => (
          <div key={item.id} className="text-center p-4 border-r border-white">
            <div className="flex justify-center items-center gap-2 mb-3">
              <span className="bg-[#621843] p-2 rounded-full"><Plus className="text-white w-5 h-5" /></span>
              <p className="text-xl xl:text-2xl font-bold text-[#621843]">{item.amount}</p>
            </div>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Contact Section */}
    <div className="bg-cover bg-center py-20 px-6 text-white text-center" style={{ backgroundImage: "url('/images/waysbg.png')" }}>
      <h2 className="text-[32px] font-bold mb-6">Have Questions?</h2>
      <p className="max-w-xl mx-auto text-2xl mb-8">
        Our team is here to help. Contact us to learn more about ways to give or to discuss your giving options. </p>
      <Link href="/contact">
        <button className="bg-[#f97316] hover:bg-orange-600 py-2 px-6 rounded-full text-[20px] md:text-[24px] font-semibold"> Contact Us </button>
      </Link>
    </div>
  </div>
);
export default FAQS;
