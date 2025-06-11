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
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-4 lg:px-6 xl:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Column 1 - Heading and Image */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#621843] mb-6">
                        {content.heading}
                    </h2>
                    <Image
                        src={PngIcons.about1}
                        alt="about"
                        width={600}
                        height={420}
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                {/* Column 2 - Text Content */}
                <div className="flex flex-col justify-center border-b-2 border-[#999999] pb-8">
                    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 mb-6 max-w-xl">
                        {content.text1}
                    </p>
                    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-800 max-w-xl">
                        {content.text2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DrivesUs;
