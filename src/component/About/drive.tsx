import PngIcons from "@/Icons/pngIcons";
import Image from "next/image";

const DrivesUs = () => {
  const content = {
    heading: "What Drives Us",
    text1:
      "At Africa for Health, we believe that access to quality healthcare is a fundamental human right. Our work is driven by the vision of an Africa where every individual has access to the care they need, regardless of their location or economic status.",
    description:
      "We focus on creating sustainable solutions by working directly with local communities, healthcare providers, and governments to build capacity and improve healthcare infrastructure. Our approach combines immediate action with long-term planning to ensure lasting impact.",
  };

  return (
    <div className="bg-white max-w-7xl mx-auto py-12 px-4 lg:px-6 xl:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#621843] mb-6">{content.heading}</h2>
          <Image
            src={PngIcons.about1}alt="about"
            width={600}
            height={420}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center border-b-2 border-[#999999] pb-8 pt-3">
          {[content.text1, content.description].map((t, i) => (
            <p key={i} className="text-base sm:text-lg lg:text-[24px] text-gray-800 mb-6 max-w-xl">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrivesUs;
