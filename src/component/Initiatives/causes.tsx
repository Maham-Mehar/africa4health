"use client";

import { useState } from "react";
import Image from "next/image";

type Initiative = {
  id: number;
  title: string;
  stat: string;
  description: string;
  image: string;
};

const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Lower Respiratory Infections",
    stat: "2.5M",
    description:
      "People reached with respiratory care annually. Combating respiratory diseases through improved access to vaccines, early detection, and treatment facilities.",
    image: "/respiratory.jpg",
  },
  {
    id: 2,
    title: "HIV/AIDS",
    stat: "1.8M",
    description:
      "Focused efforts on education, prevention, and medication access for those affected by HIV/AIDS.",
    image: "/hiv.jpg",
  },
  {
    id: 3,
    title: "Malaria",
    stat: "3.2M",
    description:
      "Initiatives for mosquito net distribution, awareness programs, and rapid treatment access.",
    image: "/malaria.jpg",
  },
  // Add the rest similarly...
];

const InitiativesSection = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleInitiative = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {initiatives.map((item, index) => (
        <div key={item.id} className="mb-6 relative">
          {activeId === item.id && (
            <div className="bg-[#5B123D] text-white rounded-xl p-6 mb-4 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-3xl font-bold my-2">{item.stat}</p>
                  <p className="text-sm max-w-md">{item.description}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="rounded-md object-cover ml-4"
                />
              </div>
              <button
                onClick={() => toggleInitiative(item.id)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>
            </div>
          )}

          <div
            className="flex justify-between items-center bg-white py-4 px-5 border rounded-md shadow cursor-pointer"
            onClick={() => toggleInitiative(item.id)}
          >
            <div className="flex items-center gap-4">
              <span className="bg-[#5B123D] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
                {String(item.id).padStart(2, "0")}
              </span>
              <p className="font-semibold text-lg text-black">{item.title}</p>
            </div>
            <span className="text-2xl font-bold text-[#5B123D]">
              {activeId === item.id ? "-" : "+"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default InitiativesSection;