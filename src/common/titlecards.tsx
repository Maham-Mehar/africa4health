import Link from "next/link";
import Image from "next/image";
import { updateData } from "@/Data/updates";

type UpdatesProps = {
  cardData: updateData[];
};

const Updates = ({ cardData }: UpdatesProps) => {
  return (
    <section className="bg-white pt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((item: updateData) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden  hover:shadow-md transition duration-300 bg-white"
          >
            {/* Image */}
            <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px]">
              <div>
                <p></p>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>

            {/* Text */}
            <div className="p-4">
              <p className="text-gray-800 text-base md:text-lg font-normal">
                {item.description.length > 90
                  ? item.description.slice(0, 90) + "..."
                  : item.description}
                <Link href={`/newsDetail/${item.id}`}>
                  <span className="text-[#621843] font-semibold hover:underline ml-1">
                    Learn More
                  </span>
                </Link>
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
