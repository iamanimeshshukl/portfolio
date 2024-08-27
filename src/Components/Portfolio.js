import React from "react";
import { AppText } from "../Constants";
import SectionHeading from "../Shared/SectionHeading";
import { robo } from "./../assets/index";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="mt-5 flex justify-center flex-col">
      <div className="flex flex-row px-6 md:px-0 items-center justify-center">
        <SectionHeading
          firstTitle={AppText.Creative}
          secondTitle={AppText.Portfolio}
        />
        <img src={robo} className="w-[70px] ml-5 animate-bounce" />
      </div>
      <div>
        <div
        >
          <Projects />
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
