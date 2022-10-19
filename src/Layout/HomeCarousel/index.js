import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./HomeCarousel.scss";
import VideoYoutube from "../../App/Component/VideoYoutube";
import CarouselRoadmap from "../../App/CardList/Roadmap";
import Footer from "../../App/Footer";

const HomeCarousel = () => (
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
export default HomeCarousel;
