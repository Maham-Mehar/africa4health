import { AdvocateData } from "@/Data/adv";
import Participents from "../../common/cards";


const title = "Advocate";
const titleText = "Your knowledge and passion help raise awareness about healthcare challenges and solutions across Africa.";

export default function Advocate() {
  return (
    <Participents
      data={AdvocateData}
      title={title}
      titleText={titleText}
    />
  );
}
