"use client";
import Image from "next/image";
// Type definition for each item
type ParticipantItem = {
  id: number;
  image: string;
  text: string;
};

// Props type for the component
type ParticipentsProps = {
  data: ParticipantItem[];
  title: string;
  titleText: string;
};

function Participents({ data, title, titleText }: ParticipentsProps) {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-6 py-10">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#621843] mb-4">
            {title}
          </h2>
          <p className="text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">
            {titleText}
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-0 xl:gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="md:px-0 lg:py-3 xl:px-4 xl:py-4 transition duration-300 hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={item.text}
                width={400}
                height={200}
                className="rounded-md object-cover w-[400px] md:w-[350px]  lg:w-full h-auto"
              />
              <p className="text-xl font-normal mt-3">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Participents;
