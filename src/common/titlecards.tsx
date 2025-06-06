import Link from "next/link";

export type UpdateItem = {
  id: number;
  image: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

type UpdatesProps = {
  data: UpdateItem[];
};

const Updates = ({ data }: UpdatesProps) => {
  return (
    <section className="pb-16 bg-white pb-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-[32px] font-bold text-[#621843] mb-4">News and Updates</h2>
          <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, success stories, and the impact we're making across Africa.
          </p>
        </div>

        {/* Updates List */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.id} className="p-4 transition duration-300">
              <p className="text-[#F68E3F] text-lg font-semibold mt-4 ms-1">{item.text1}</p>
              <img
                src={item.image}
                alt={item.text1}
                className="rounded-md object-cover mt-4"
              />
              <p className="mt-2 text-gray-800 text-base font-normal">
                {item.text2.split(item.text3)[0]}
                <span className="text-[#C6C6C6] font-semibold cursor-pointer hover:underline">
                  {item.text3}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.text4}</p>
            </div>
          ))}
        </div>

        <Link href="/viewall">
          <div className="flex justify-center mt-5">
            <button className="bg-[#621843] text-white text-lg font-bold px-9 py-2 rounded-full hover:bg-[#72122f] transition">
              View All News
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Updates;
