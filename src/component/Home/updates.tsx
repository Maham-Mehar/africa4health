// pages/index.tsx
import Updates from "@/common/titlecards";
import { cardData } from "@/Data/updates";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 md:py-6 lg:py-10">
        {/* other sections... */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
            News and Updates
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, success stories, and the impact we're making across Africa.
          </p>
        </div>

        <Updates cardData={cardData} />

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link href="/viewall">
            <button className="bg-[#621843] text-white text-lg font-bold px-9 py-2 rounded-full hover:bg-[#72122f] transition">
              View All News
            </button>
          </Link>
        </div>

      </div>
      {/* other sections... */}
    </main>
  );
}
