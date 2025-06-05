import PngIcons from "@/Icons/pngIcons";

interface aboutData {
  title: string;
  text: string;
  bg: string;
}

function HeroSection(props: aboutData) {
  const styledTitle = props.title.split("").map((char, index) =>
    char.toLowerCase() === "o" ? (
      <span key={index} className="text-[#FE9430]">
        {char}
      </span>
    ) : (
      <span key={index}>{char}</span>
    )
  );

  return (
    <div
      className={`relative ${props.bg} bg-cover bg-center h-[80vh] text-white flex items-end justify-start ps-[90px]`}
    >
      {/* Content aligned bottom-left */}
      <div className="relative z-10 px-6 pb-[99px] ms-[10px]">
        <div className="border-l-6 border-l-[#fE9430]">
          <div className="ms-[15px]">
            <p className="text-3xl max-w-2xl font-bold mb-4 text-[80px] font-extrabold leading-[1]">
              {styledTitle}
            </p>
            <p className="max-w-xl text-2xl font-medium">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
