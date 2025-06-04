import InitiativesSection from "@/component/Initiatives/causes";
import InitSection from "@/component/Initiatives/initHero";
import Health from "@/component/Initiatives/health";
import OurWork from "@/component/Initiatives/ourWork";
import { Fragment } from "react";

const initiatives = () =>{
    return(
      <Fragment>
        <InitSection />
        <InitiativesSection />
        <Health />
        <OurWork />
      </Fragment>
    )
}
export default initiatives;