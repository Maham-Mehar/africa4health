import InitiativesSection from "@/component/Initiatives/causes";
import InitSection from "@/component/Initiatives/initHero";
import { Fragment } from "react";

const initiatives = () =>{
    return(
      <Fragment>
        <InitSection />
        <InitiativesSection />
      </Fragment>
    )
}
export default initiatives;