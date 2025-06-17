"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
  //  shuffle images
const images = [
  "/images/support1.png",
  "/images/support2.png",
  "/images/support3.png",
  "/images/support4.png",
  "/images/support5.png",
];
const SupportSection = () => {
  const [shuffledImages, setShuffledImages] = useState(images);
  const shuffleImages = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  };

  useEffect(() => {
    const interval = setInterval(shuffleImages, 3000);
    return () => clearInterval(interval);
  }, []);

  const rotations = ["rotate-[-4deg]", "rotate-[2deg]", "rotate-[0deg]"];
  return (
    <section className="max-w-6xl bg-white mx-auto px-4 pt-8 pb-0 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-0 md:mb-14 mt-14">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <div
          className="absolute top-[-45px] left-[-15px] h-[570px] w-[350px] bg-left bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/waysbg2.png')" }} />
        {/* Shuffled rotating images on top */}
        {shuffledImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 transform ${rotations[index % rotations.length]} z-[${index + 1}]`} >
            <Image
              src={img}
              alt={`Support image ${index + 1}`}
              width={504}
              height={300}
              className="object-cover w-[450px] h-[450px] md:w-[500px] md:h-[500px] rounded-lg"
            />
          </div>
        ))}
      </div>
      {/* Text Content */}
      <div className="text-center md:text-left mt-[140px] md:mt-0">
        <h2 className="text-[#5B123D] text-3xl font-bold mb-4"> Your Support Makes a Difference </h2>
        <p className="text-gray-700 text-base mb-4">
          When you support Africa for Health, you’re helping to provide essential healthcare services to communities that need them most. Your generosity directly impacts the lives of individuals across Africa.
        </p>
        <p className="text-gray-700 text-base">
          From training healthcare workers to building medical facilities and providing life-saving treatments, your support enables us to continue our vital work and expand our reach.
        </p>
      </div>
    </section>
  );
};
export default SupportSection;
