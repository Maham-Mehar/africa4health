import Link from "next/link";
import Image from "next/image";
import { updateData } from "@/Data/updates";

type UpdatesProps = {
  cardData: updateData[];
};

const Updates = ({ cardData }: UpdatesProps) => {
  return (
    <section className="bg-white">
      {/* Update Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 lg:gap-2">
        {cardData.map((item: updateData) => (
          <div
            key={item.id}
            className="px-0 lg:px-3 xl:px-4 py-2 lg:py-3 xl:py-4 transition duration-300"
          >
            <div className="w-full h-100 relative rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-3 text-gray-800 md:text-base font-normal">
              {item.description.length > 70
                ? item.description.slice(0, 70) + " "
                : item.description}
              <Link href={`/newsDetail/${item.id}`}>
                <span className="text-[#C6C6C6] font-semibold hover:underline cursor-pointer">
                  - Learn More
                </span>
              </Link>
            </p>
            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
