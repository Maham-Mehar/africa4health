import Image from "next/image";
import { newsTabs, newsCard } from "@/Data/news"; 
import PngIcons from "@/Icons/pngIcons";
import { cardData, updateData } from "@/Data/updates";

interface NewsUpdatesProps {
  id: string;
}

const NewsUpdates = ({ id }: NewsUpdatesProps) => {
  const data = cardData.find((item) => item.id === Number(id));

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* News Card */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 items-start">
        {/* Text Column */}
        <div className="md:col-span-7 space-y-6 max-w-xl">
          <h3 className="text-[#621843] md:text-[40px] font-bold text-[#1A1A1A]">

            {data?.title}
          </h3>
          <p className="text-xl font-bold text-gray-500">
            {newsCard.readTime} &middot; {data?.date}
          </p>

          <p className="text-[#1A1A1A] text-lg leading-relaxed">
            {data?.description}
          </p>
        </div>

        {/* Image Column */}
        <div className="md:col-span-5">
          <div className="overflow-hidden flex justify-end w-full">
            <Image
              src={PngIcons.viewall}
              alt={newsCard.alt}
              width={700}
              height={550}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsUpdates;
