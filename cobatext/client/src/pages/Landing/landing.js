import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
/* import Nav from "../../components/Nav"; */
import {
  SectionOne,
  SectionTwo,
  SectionThree
} from "../../components/FullPage";

const Landing = () => (
  <ReactFullpage
    anchors={["firstPage", "secondPage", "thirdPage"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      );
    }}
  />
);

export default Landing;
