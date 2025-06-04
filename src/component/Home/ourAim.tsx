import { ourAimData } from "@/Data/ouraim";

const OurAim = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto xl:px-0 lg:px-2 px-4">
                <div>
                    {ourAimData.map((item) => {
                        const isPurple = item.id === 1 || item.id === 3 || item.id === 5;
                        const textColor = isPurple ? "text-[#621843]" : "text-[#FE9430]";
                        const hoverBg = isPurple ? "hover:bg-[#FCF3F9]" : "hover:bg-[#FFF1E5]";

                        return (
                            <div
                                key={item.id}
                                className={`flex justify-between border-b border-b-gray-800 py-6 px-4 transition duration-300 ease-in-out ${hoverBg}`}
                            >
                                <div className="text-left">
                                    <p className={`text-[70px] font-bold ${textColor}`}>
                                        {item.text1}
                                    </p>
                                    <h3 className="text-xl font-bold text-[#621843] mt-2 max-w-xs">
                                        {item.Heading}
                                    </h3>
                                </div>
                                <div className="max-w-xl">
                                    <p className="text-gray-700 mt-2 text-[32px] font-medium leading-[1.3]">
                                        {item.text2}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                   <button className="bg-[##FE9430] text-white text-base font-bold px-5 py-2 rounded-full hover:bg-[#72122f] transition">
                          Learn more about our impact
                            </button>
            </div>
        </section>
    );
};

export default OurAim;
