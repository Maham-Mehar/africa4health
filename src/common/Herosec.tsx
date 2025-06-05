import PngIcons from "@/Icons/pngIcons";
interface aboutData {
  title: string;
  text: string;
  bg: string;
}

function HeroSection(props: aboutData) {
  return (
    <div className={`relative ${props.bg} bg-cover bg-center h-[80vh] text-white flex items-end justify-start ps-[90px]`}>
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-end pb-[105px] bg-opacity-50 ps-[99px]">
        <img src={PngIcons.h1} alt="" />
      </div>

      {/* Content aligned bottom-right */}
      <div className="relative z-10 px-6 pb-10">
        <div>
          <p className="text-3xl max-w-2xl font-bold mb-4 text-[80px] font-extrabold leading-[1]">{props.title}</p>
          <p className="max-w-xl text-2xl font-medium pb-[55px]">
            {props.text}
          </p>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
