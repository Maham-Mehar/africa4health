import Image from "next/image";
import { newsTabs, newsCard } from "@/Data/news"; // adjust path as needed
import PngIcons from "@/Icons/pngIcons";
const NewsUpdates = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#621843]">News & Updates</h2>
        <p className="text-[#1A1A1A] mt-2 text-xl font-medium py-2">
          Stay Informed: Latest News and Updates on Our Impact Across Africa
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-6 text-xl font-bold">
          {newsTabs.map((tab, index) => (
            <button
              key={index}
              className={`pb-1 ${tab.active
                  ? "text-[#621843] border-b-2 border-[#621843]"
                  : "text-gray-500"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* News Card */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 items-start">
        {/* Text Column */}
        <div className="md:col-span-7 space-y-6 max-w-xl">
          <h3 className="text-[#621843] md:text-[40px] font-bold text-[#1A1A1A]">
            {newsCard.title}
          </h3>
          <p className="text-xl font-bold text-gray-500">
            {newsCard.readTime} &middot; {newsCard.date}
          </p>
          <p className="text-[#1A1A1A] text-xl font-bold leading-relaxed">
            {newsCard.heading}
          </p>
          <p className="text-[#1A1A1A] text-lg leading-relaxed">
            {newsCard.description}
          </p>

          {/* Detailed Sections */}
          {[1, 2, 3, 4].map((section) => (
            <div key={section} className="space-y-2">
              <h4 className="text-xl font-bold text-black">
                {newsCard[`title${section}` as keyof typeof newsCard]}
              </h4>
              <p className="text-[#1A1A1A] text-base leading-relaxed">
                {newsCard[`detail${section}` as keyof typeof newsCard]}
              </p>
            </div>
          ))}
        </div>

        {/* Image Column */}
{/* Image Column */}
<div className="md:col-span-5">
  <div className="overflow-hidden flex justify-end w-full">
    <Image
      src={PngIcons.viewall}
      alt={newsCard.alt}
      width={700} // increased from 600
      height={550} // increased from 500
      className="object-cover w-full h-auto rounded-lg"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default NewsUpdates;
