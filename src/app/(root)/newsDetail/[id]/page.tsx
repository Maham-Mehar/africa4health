import { Fragment } from "react";
import NewsUpdates from "@/component/viewAll/viewhero";
import Updates from "@/common/titlecards";
import OurCommunity from "@/component/viewAll/community";
import { cardData } from "@/Data/updates";
import { NewsDetailPageProps } from "./types";
// Make the component async to handle the Promise-based params
export default async function Page({ params }: NewsDetailPageProps) {
  // Await the params Promise to get the actual id
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return (
    <Fragment>
      <NewsUpdates id={id} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0 md:pt-6 lg:pt-10">
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