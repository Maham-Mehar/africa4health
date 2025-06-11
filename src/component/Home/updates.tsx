import Image from "next/image";
import Link from "next/link";
import { updatedData } from "@/Data/updates";
import PngIcons from "@/Icons/pngIcons";

const Updates = () => {
  return (
    <section className="bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 md:py-6 lg:py-10">
        {/* Heading Section */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
            News and Updates
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, success stories, and the impact we're making across Africa.
          </p>
        </div>

        {/* Updates List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 lg:gap-2">
          {updatedData.map((item) => (
            <div key={item.id} className="p-2 lg:p-3 xl:p-4 transition duration-300">
              <div className="w-full h-60 relative rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.text1}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mt-3 text-gray-800 md:text-base font-normal">
                {item.text2.split(item.text3)[0]}
                <Link href="/education">
                  <span className="text-[#C6C6C6] font-semibold hover:underline cursor-pointer">
                    {item.text3}
                  </span>
                </Link>
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.text4}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link href="/viewall">
            <button className="bg-[#621843] text-white text-lg font-bold px-9 py-2 rounded-full hover:bg-[#72122f] transition">
              View All News
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Updates;
