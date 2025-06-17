"use client";
import Image from "next/image";
import PngIcons from "@/Icons/pngIcons";
import { initiatives } from "@/Data/features";

const colorClass = (id: number) => {
  if ([4, 8].includes(id)) return "text-[#621843]";
  if ([1, 5, 7].includes(id)) return "text-[#FE9430]";
  return "text-[#5B123D]";
};

const InitiativeCard = ({ item, index }: { item: any; index: number }) =>
  item?.title ? (
    <div className="pt-4">
      <p className={`text-lg md:text-xl pb-2 font-semibold border-b-2 border-b-[#D9D9D9] ${colorClass(item.id)}`}>
        {String(index).padStart(2, "0")}
      </p>
      <h3 className={`text-2xl md:text-3xl font-bold mt-2 ${colorClass(item.id)}`}>{item.title}</h3>
      <p className="text-gray-700 mt-4 max-w-lg text-base md:text-lg">{item.description}</p>
    </div>
  ) : item?.image ? (
    <div className="w-full h-auto">
      <Image src={item.image} alt={`Initiative ${item.id}`} width={600} height={400} className="object-cover w-full rounded-lg" />
    </div>
  ) : null;

const Initiatives = () => {
  const sorted = [...initiatives].sort((a, b) => a.id - b.id);
  const rows = Array.from({ length: Math.ceil(sorted.length / 2) }, (_, i) => [sorted[i * 2], sorted[i * 2 + 1]]);
  let idx = 1;

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 z-0"><img src={PngIcons.image1} alt="" className="w-32 sm:w-40 md:w-48" /></div>
      <div className="absolute bottom-0 right-0 z-0"><img src={PngIcons.image2} alt="" className="w-32 sm:w-40 md:w-48" /></div>
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {rows.map(([left, right], i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {left && <InitiativeCard item={left} index={idx++} />}
            {right && <InitiativeCard item={right} index={idx++} />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Initiatives;
