import NewsUpdates from "@/component/viewAll/viewhero";
import Updates from "@/common/titlecards";
import { Fragment } from "react";
import OurCommunity from "@/component/viewAll/community";
import { cardData } from "@/Data/updates";

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default async function NewsDetail({ params }: NewsDetailPageProps) {
  const { id } = params;

  // Optional: Fetch data here
  // const post = await fetch(...).then(res => res.json());

  return (
    <Fragment>
      <NewsUpdates id={id} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 md:py-6 lg:py-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#621843] mb-4">
            Other News
          </h2>
        </div>

        <Updates cardData={cardData} />
      </div>
      <OurCommunity />
    </Fragment>
  );
}
