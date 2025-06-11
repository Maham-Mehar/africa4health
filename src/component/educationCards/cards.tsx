// pages/index.tsx
import Updates from "@/common/titlecards";
import { updatedData } from "@/Data/updates";
import { ViewedData } from "@/Data/viewall";

export default function Home() {
  return (
    <main>
      {/* other sections... */}

      <Updates data={ViewedData} />

      {/* other sections... */}
    </main>
  );
}
