import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./CarouselImages.scss";
// const anchors = ["firstPage", "secondPage", "thirdPage"];

const CarouselImages = () => (
  <ReactFullpage
    // anchors={anchors}
    // navigation
    // navigationTooltips={anchors}
    // navigat
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section images1"></div>
          <div className="section images2"></div>
          <div className="section images3"></div>
        </div>
      );
    }}
  />
);
export default CarouselImages;
