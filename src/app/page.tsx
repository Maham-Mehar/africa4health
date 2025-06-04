import Hero from "@/component/Home/hero";
import OurMission from "@/component/Home/ourMission";
import JoinUs from "@/component/Home/joinUs";
import OurAim from "@/component/Home/ourAim";
import Updates from "@/component/Home/updates";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <h1>helloo</h1> */}
      <Hero />
      <OurMission />
      <OurAim />
      <JoinUs />
      <Updates />    </Fragment>
  );
}
