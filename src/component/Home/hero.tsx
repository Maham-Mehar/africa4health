"use client";
import PngIcons from "@/Icons/pngIcons";
import Link from "next/link";

const stats = [
  {
    value: "350+",
    label: "villages",
    description: "Supported with essential resources and services",
    textColor: "#621843",
  },
  {
    value: "95K+",
    label: "patients treated",
    description: "Through mobile clinics and partner hospitals",
    bg: "#6A1B4D",
    textColor: "#FE9430",
  },
  {
    value: "210+",
    label: "medical camps",
    description: "Conducted in underserved regions",
    textColor: "#621843",
  },
];

const Hero = () => {
  return (
    <div className="relative flex items-center h-[320px] md:h-screen overflow-hidden">
      <div className="absolute right-0 top-0 h-[320px] md:h-[700px] w-[380px] md:w-full z-0 bg-cover bg-center sm:hidden md:block" style={{ backgroundImage: `url(${PngIcons.hero})` }}></div>

      {/* Faded strip at the bottom */}
      <div className="absolute bottom-0 w-full h-[15vh] bg-[#FEECE4] z-0 hidden md:block"></div>

      {/* Left Content */}
      <div className="relative z-10 ps-[14px] lg:ps-[20px] xl:ps-[120px] flex flex-col gap-6 lg:gap-7 xl:gap-6 max-w-[250px] md:max-w-md lg:max-w-xl xl:max-w-3xl">
        <p className="text-xl md:text-4xl lg:text-[44px] xl:text-[54px] font-extrabold text-[#621843] leading-snug mt-19 md:mt-0">
          Impr<span className="text-[#F37021]">o</span>ving Health <br />
          Outc<span className="text-[#F37021]">o</span>mes Acr
          <span className="text-[#F37021]">o</span>ss Africa
        </p>
        <Link href="/donate">
          <button className="bg-[#F37021] text-white w-[110px] sm:w-[130px] md:w-[150px] lg:w-[190px] mb-[80px] text-sm sm:text-base md:text-xl lg:text-2xl py-1 lg:py-3 font-semibold rounded-full hover:cursor-pointer hover:bg-[#d45f1c] transition">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Stats Cards (Centered and Col-4 Style) */}
      <div>
        <div className="hidden md:block absolute bottom-6 flex items-center left-0 right-0 w-full md:h-[90px] lg:h-[110px] xl:h-[140px] max-w-7xl mx-auto z-20 px-4 bg-[#FE9430] rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={` px-3 flex flex-col items-center justify-center  ${index === 1 ? "md:mt-[-12px] lg:mt-[-22px] xl:mt-[-25px] md:h-[92px] lg:h-[115px] xl:h-[150px] flex flex-col items-center justify-center" : ""} `}
                style={{ backgroundColor: stat.bg }}
              >
                <p
                  className="text-[22px] lg:text-[28px] font-extrabold"
                  style={{ color: stat.textColor }}
                >
                  {stat.value} <span className="text-white md:text-[16px] lg:text-[24px] xl:text-[30px] 2xl:text-[30px]">{stat.label}</span>
                </p>
                <p className="text-sm lg:max-w-3xs xl:max-w-xs md:text-base lg:text-lg xl:text-[24px] text-white font-medium md:leading-5 lg:leading-5.5 xl:leading-7">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
