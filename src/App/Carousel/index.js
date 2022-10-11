import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Carousel.scss";
import VideoYoutube from "../Component/VideoYoutube";
import CarouselRoadmap from "../CarouselRoadmap";
import Footer from "../Footer";

const CarouselImages = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images1"></div>
          <div className="section images3">
            <CarouselRoadmap />
          </div>
          <div className="section images2">
            <VideoYoutube src="https://www.youtube.com/embed/dhbRRpxKGNk" />
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default CarouselImages;
