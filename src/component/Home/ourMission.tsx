import Image from "next/image";
import PngIcons from "@/Icons/pngIcons";
import { FaCheckCircle } from "react-icons/fa";

// Define the value type
interface ValueItem {
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    title: "Compassion First",
    description: "We lead with empathy and care for every life.",
  },
  {
    title: "Sustainable Change",
    description: "We create long-term impact, not short-term fixes.",
  },
  {
    title: "Equality for All",
    description: "We fight for fairness, dignity, and equal opportunity.",
  },
];

const OurMission = () => {
  return (
    <section className="relative py-20 gap-8 overflow-hidden">
      {/* Decorative Image at the Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0">
        <img src={PngIcons.missionimg} alt="Decorative" className="w-auto h-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
            How we Plan to Change the Future
          </h2>
          <p className="text-2xl font-medium max-w-4xl mx-auto text-gray-700">
            Africa for Health is committed to transforming healthcare outcomes across the continent. Through strategic partnerships, community engagement, and evidence-based interventions, we're working to create sustainable change in healthcare delivery and access.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <Image
            src={PngIcons.mission}
            alt="Mission"
            width={590}
            height={590}
            className="object-cover"
          />

          {/* Our Value */}
          <div>
            <h3 className="text-[40px] font-semibold text-[#621843] mb-6">
              Our Value
            </h3>
            <ul className="space-y-6">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-left max-w-md"
                >
                  <FaCheckCircle className="text-[#F9B233] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[22px] text-[#621843]">
                      {value.title}
                    </p>
                    <p className="text-gray-700 text-[20px] font-normal">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
