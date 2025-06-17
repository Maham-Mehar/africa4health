"use client";
import Image from "next/image";

type ParticipantItem = { id: number; image: string; text: string };
type ParticipentsProps = { data: ParticipantItem[]; title: string; titleText: string };

const Participents = ({ data, title, titleText }: ParticipentsProps) => (
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-6 py-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#621843] mb-4">{title}</h2>
        <p className="text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">{titleText}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 xl:gap-3">
        {data.map(({ id, image, text }) => (
          <div key={id} className="xl:px-4 xl:py-4 transition hover:shadow-lg">
            <Image
              src={image}
              alt={text}
              width={400}
              height={200}
              className="rounded-md object-cover w-full h-auto"
            />
            <p className="text-xl font-normal mt-3">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Participents;
