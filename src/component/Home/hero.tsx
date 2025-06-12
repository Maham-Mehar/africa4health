import PngIcons from "@/Icons/pngIcons";

const stats = [
  {
    value: "350+",
    label: "villages",
    description: "Supported with essential resources and services",
    bg: "#F9B233",
  },
  {
    value: "95K+",
    label: "patients treated",
    description: "Through mobile clinics and partner hospitals",
    bg: "#6A1B4D",
  },
  {
    value: "210+",
    label: "medical camps",
    description: "Conducted in underserved regions",
    bg: "#F9B233",
  },
];

const Hero = () => {
  return (
    <div className="relative flex items-center h-screen overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute right-0 top-0 h-full w-full z-0">
        <img
          src={PngIcons.hero}
          alt="Hero"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Faded strip at the bottom */}
      <div className="absolute bottom-0 w-full h-[15vh] bg-[#FEECE4] z-0"></div>

      {/* Left Content */}
      <div className="relative z-10 lg:ps-[20px] xl:ps-[120px] flex flex-col lg:gap-7 xl:gap-6 max-w-xl xl:max-w-3xl">
        <p className="text-4xl lg:text-[44px] xl:text-[54px] font-extrabold text-[#621843] leading-snug">
          Impr<span className="text-[#F37021]">o</span>ving Health <br />
          Outc<span className="text-[#F37021]">o</span>mes Acr
          <span className="text-[#F37021]">o</span>ss Africa
        </p>

        <button className="bg-[#F37021] text-white w-[190px] mb-[80px] text-2xl py-3 font-semibold rounded-full hover:bg-[#d45f1c] transition">
          Donate Now
        </button>
      </div>


      {/* Cards at the bottom left aligned like Figma */}
      <div className="absolute bottom-[22px] px-4 left-1/2 transform -translate-x-1/2 rounded-xl xl:px-8 py-2 lg:py-3 xl:py-4 z-20 w-full max-w-7xl bg-[#FE9430] flex justify-between">
        <div>
          <p className="text-[26px] xl:text-[32px] font-extrabold text-[#621843] text-center"> 350+ <span className="text-white">villages</span></p>
          <p className="lg:text-[20px] xl:text-[24px] font-semi-bold text-white max-w-2xs text-center">Supported with essential resources and services</p>
        </div>

        <div className="tect-center">
          <p className="text-[26px] xl:text-[32px] font-extrabold text-[#621843] text-center">210+ <span className="text-white">medical camps</span></p>
          <p className="text-[20px] font-semi-bold text-white max-w-2xs text-center">Conducted in underserved regions</p>
        </div>
      </div>

      <div className="absolute bottom-10 z-20 left-0 lg:left-80 xl:left-130 bg-[#621843] text-center px-6 py-4">
        <p className="text-[20px] lg:text-[26px] xl:text-[32px] font-extrabold text-[#FE9430]">95K+ <span className="text-white">patients treated</span></p>
        <p className="text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-white text-center max-w-xs mx-auto">
          Through mobile clinics and partner hospitals
        </p>
      </div>
    </div>
  );
};

export default Hero;
