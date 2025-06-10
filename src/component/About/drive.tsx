import PngIcons from "@/Icons/pngIcons";
import React from "react";
import Image from "next/image";
const DrivesUs = () => {
    type FooterLinkSection = {
        heading: string;
        text1: string;
        text2: string;
    };

    const content: FooterLinkSection = {
        heading: "What Drives Us",
        text1:
            "At Africa for Health, we believe that access to quality healthcare is a fundamental human right. Our work is driven by the vision of an Africa where every individual has access to the care they need, regardless of their location or economic status.",
        text2:
            "We focus on creating sustainable solutions by working directly with local communities, healthcare providers, and governments to build capacity and improve healthcare infrastructure. Our approach combines immediate action with long-term planning to ensure lasting impact.",
    };

    return (
        <div className="max-w-7xl mx-auto py-15">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1 - Heading only */}
                <div className="">
                    <p className="text-2xl text-[32px] font-bold text-[#621843] mb-5">{content.heading}</p>
                    <Image src={PngIcons.about1} alt="about" width={600} height={420}/>
                </div>

                {/* Column 2 - Text 1 and Text 2 */}
                <div className=" flex flex-col justify-end items-center pb-10 border-b-2 border-b-[#999999]">
                    <p className="mb-4 text-[24px] max-w-lg font-medium">{content.text1}</p>
                    <p className="text-[24px] max-w-lg font-medium ">{content.text2}</p>
                </div>
            </div>
        </div>
    );
};

export default DrivesUs;
