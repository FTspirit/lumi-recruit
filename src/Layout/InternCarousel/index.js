// Import Lib
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// Import scss
import "./InternCarousel.scss";

// Import Component
import Footer from "../../App/Footer";
import TrainingProcess from "../../App/Component/TrainingProcess";
import Tricks from "../../App/Tricks";

const InternCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section imagesInternCarousel1">
            <TrainingProcess />
          </div>
          <div className="section imagesInternCarousel2">
            <Tricks />
          </div>
          <div className="section imagesInternCarousel3">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default InternCarousel;
