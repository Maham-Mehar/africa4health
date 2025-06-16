"use client";
import { Fragment, useEffect, useState } from "react";
import Hero from "@/component/Home/hero";
import OurMission from "@/component/Home/ourMission";
import JoinUs from "@/component/Home/joinUs";
import OurAim from "@/component/Home/ourAim";
import Updates from "@/component/Home/updates";
import SaveLives from "@/component/saveLives";
// import ImageSliderPopup from "@/component/Common/ImageSliderPopup"; // ✅ adjust path as needed

export default function Home() {


  return (
    <Fragment>
      <Hero />
      <OurMission />
      <OurAim />
      <JoinUs />
      <Updates />
    </Fragment>
  );
}
