"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SliderData} from "@/Data/slider";

function SliderSection() {
  const title = "Give";
  const titleText =
    "Your donation helps save lives. When you donate to Africa for Health, you are joining us in the fight against preventable diseases.";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white pb-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#FE9430] mb-4">
            {title}
          </h2>
          <p className="text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">
            {titleText}
          </p>
        </div>

        {/* Slider Section */}
        <Slider {...settings}>
          {SliderData.map((item) => (
            <div key={item.id} className="px-2">
              <div className="p-4 transition duration-300 hover:shadow-md">
                <Image
                  src={item.image}
                  alt={item.text}
                  width={370}
                  height={140}
                  className="rounded-md object-cover w-full h-auto"
                />
                <p className="text-xl font-normal mt-3">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderSection;
