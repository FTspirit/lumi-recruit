import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Carousel.scss";
// import RecruitmentProcess from "../Component/RecruitmentProcess";
import VideoYoutube from "../Component/VideoYoutube";
import CarouselRoadmap from "../CarouselRoadmap";

const CarouselImages = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images1"></div>
          <div className="section images2">
            <VideoYoutube src="https://www.youtube.com/embed/4oyj_smPAjc" />
            {/* <RecruitmentProcess /> */}
          </div>
          <div className="section images3">
            <CarouselRoadmap />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default CarouselImages;
