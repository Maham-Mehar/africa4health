import HeroSection from "@/component/About/hero";
import DrivesUs from "@/component/About/drive";
import Initiatives from "@/component/About/features";
import { Fragment } from "react";

const About = () =>{
    return(
      <Fragment>
        <HeroSection />
        <DrivesUs />
        <Initiatives />
      </Fragment>
    )
}
export default About;