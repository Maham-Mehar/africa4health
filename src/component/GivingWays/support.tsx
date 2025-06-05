"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/support1.png",
  "/images/support2.png",
  "/images/support3.png",
  "/images/support4.png",
  "/images/support5.png",
];

const SupportSection = () => {
  const [shuffledImages, setShuffledImages] = useState(images);

  // Shuffle function
  const shuffleImages = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  };

  // Auto reshuffle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages();
    }, 3000); // change shuffle speed here

    return () => clearInterval(interval); // Cleanup
  }, []);

  const rotations = ["rotate-[-4deg]", "rotate-[2deg]", "rotate-[0deg]"];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      {/* Image Stack */}
      <div className="relative w-full h-[400px]">
        {shuffledImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-400 transform ${rotations[index % rotations.length]} z-[${index}]`}
          >
            <Image
              src={img}
              alt={`Support image ${index + 1}`}
              fill
              className="object-cover "
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-[#5B123D] text-3xl font-bold mb-4">
          Your Support Makes a Difference
        </h2>
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
