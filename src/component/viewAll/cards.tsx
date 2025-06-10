import Image from "next/image";
import { updatedData } from "@/Data/updates"; // Adjust path if needed
import PngIcons from "@/Icons/pngIcons";
import Link from "next/link";
const Updates = () => {
    return (
        <section className="pb-5  bg-white ">
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Heading Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">News <span className="">&</span> Updates</h2>
                </div>

                {/* Updates List */}
                <div className="grid md:grid-cols-3 gap-8">
                    {updatedData.map((item) => (
                        <div key={item.id} className="p-4 transition duration-300">
                            <p className="text-[#F68E3F] text-lg font-semibold mt-4 ms-1">{item.text1}</p>
                            <img
                                src={item.image}
                                alt={item.text1}
                                className="rounded-md object-cover mt-4"
                            />
                            <p className="mt-2 text-gray-800 text-base font-normal">
                                {item.text2.split(item.text3)[0]}
                                <span className="text-[#C6C6C6] font-semibold  cursor-pointer hover:underline">
                                    {item.text3}
                                </span>
                            </p>
                            <p className="text-sm text-gray-500 mt-2">{item.text4}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Updates;
