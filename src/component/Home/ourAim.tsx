import { ourAimData } from "@/Data/ouraim";

const OurAim = () => {
    return (
        <section className="pt-10 lg:pt-13 xl:pt-16 bg-white">
            <div className="max-w-7xl mx-auto xl:px-0 lg:px-6 px-4">
                <div className="">
                    {ourAimData.map((item) => {
                        const isPurple = item.id === 1 || item.id === 3 || item.id === 5;
                        const textColor = isPurple ? "text-[#621843]" : "text-[#FE9430]";
                        const hoverBg = isPurple ? "hover:bg-[#FCF3F9]" : "hover:bg-[#FFF1E5]";

                        return (
                            <div
                                key={item.id}
                                className={`flex flex-col md:flex-row justify-between border-b border-gray-300 py-4 sm:py-6 px-0 md:px-0 lg:px-4 transition duration-300 ease-in-out ${hoverBg} gap-4 lg:gap-5 xl:gap-4`}
                            >
                                {/* Left Content */}
                                <div className="text-left md:w-1/3">
                                    <p className={`text-[42px] md:text-[46px] lg:[62px] xl:text-[70px] font-bold ${textColor}`}>
                                        {item.text1}
                                    </p>
                                    <h3 className="text-lg md:text-lg lg:text-xl xl:2xl font-bold text-[#621843] mt-0 md:mt-2">
                                        {item.Heading}
                                    </h3>
                                </div>

                                {/* Right Content */}
                                <div className="md:w-2/3 flex items-center">
                                    <p className="text-gray-700 mt-0 md:mt-2 text-[19px] md:text-[22px] lg:text-[23px] xl:text-[28px] font-medium leading-[1.5]">
                                        {item.text2}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* CTA Button */}
                    <div className="text-center mt-8">
                        <button className="bg-[#FE9430] text-white text-base font-bold px-6 py-3 rounded-full hover:bg-[#72122f] transition">
                            Learn more about our impact
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAim;
