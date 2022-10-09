import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./CarouselImages.scss";
import CarouselRoadmap from "../CarouselRoadmap";
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
          <div className="section images2">
            <div className="CarouselHeading">
              <p className="CarouselDescription">Hành trình phát triển</p>
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/h7MYJghRWt0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="section images3"></div>
          <div className="section">
            <CarouselRoadmap />
          </div>
        </div>
      );
    }}
  />
);
export default CarouselImages;
