import { ourAimData } from "@/Data/ouraim";
import Link from "next/link";

const OurAim = () => (
  <section className="pt-10 lg:pt-13 xl:pt-16 bg-white">
    <div className="max-w-7xl mx-auto xl:px-0 lg:px-6 px-4">
      {ourAimData.map(({ id, text1, text2, Heading }) => {
        const isPurple = [1, 3, 5].includes(id);
        const color = isPurple ? "text-[#621843]" : "text-[#FE9430]";
        const hover = isPurple ? "hover:bg-[#FCF3F9]" : "hover:bg-[#FFF1E5]";
        return (
          <div key={id} className={`flex flex-col md:flex-row justify-between border-b border-gray-300 py-4 sm:py-6 lg:px-4 transition ${hover} gap-4 lg:gap-5 xl:gap-4`}>
            <div className="text-left md:w-1/3">
              <p className={`text-[42px] md:text-[46px] lg:[62px] xl:text-[70px] font-bold ${color}`}>{text1}</p>
              <h3 className="text-lg lg:text-xl xl:2xl font-bold text-[#621843] mt-0 md:mt-2">{Heading}</h3>
            </div>
            <div className="md:w-2/3 flex items-center">
              <p className="text-gray-700 text-[19px] md:text-[22px] lg:text-[23px] xl:text-[28px] font-medium leading-[1.5] mt-0 md:mt-2">{text2}</p>
            </div>
          </div>
        );
      })}
      <div className="text-center mt-8 xl:mt-11">
        <Link href="about">
          <button className="bg-[#FE9430] text-white text-base md:text-[20px] lg:text-[24px] font-medium px-6 py-2 md:py-3 rounded-full hover:bg-[#72122f] transition">Learn more about our impact</button>
        </Link>
      </div>
    </div>
  </section>
);

export default OurAim;
