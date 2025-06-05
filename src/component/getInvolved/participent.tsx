import Participents from "../../common/cards";
import { ParticipentsData } from "@/Data/participate";

const title = "Participate";
const titleText = "Your valuable time and effort are essential to helping fight disease and improve healthcare access across Africa.";

export default function ParticipentData() {
  return (
    <Participents
      data={ParticipentsData}
      title={title}
      titleText={titleText}
    />
  );
}
