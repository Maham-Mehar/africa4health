import Link from "next/link";
import Image from "next/image";
import { updateData } from "@/Data/updates";

type UpdatesProps = {
  cardData: updateData[];
};

const Updates = ({ cardData }: UpdatesProps) => (
  <section className="bg-white pt-10 px-0 xl:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map(({ id, image, title, heading, description, date }) => (
        <div key={id} className="rounded-lg overflow-hidden bg-white hover:shadow-md transition duration-300">
          <div className="relative w-full h-[400px]">
            <div className="absolute bottom-4 left-2 right-1 z-10">
              <p className="text-[20px] md:text-[22px] xl:text-[24px] font-bold text-white leading-7">{heading}</p>
            </div>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-800 text-base md:text-lg font-normal">
              {description.length > 90 ? description.slice(0, 90) + "..." : description}
              <Link href={`/newsDetail/${id}`}>
                <span className="text-[#621843] font-semibold hover:underline ml-1 cursor-pointer">Learn More</span>
              </Link>
            </p>
            <p className="text-sm text-gray-500 mt-2">{date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Updates;
