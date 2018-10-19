import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import {
  SectionOne,
  SectionTwo
  
} from "../../components/FullPage";

const Landing = () => (
  <ReactFullpage
    anchors={["firstPage", "secondPage"]}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <SectionOne />
          <SectionTwo />
        </div>
      );
    }}
  />
);

export default Landing;
