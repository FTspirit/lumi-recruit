import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./RecruitCarousel.scss";
import RecruitmentProcess from "../Component/RecruitmentProcess";
import FAQAccordion from "../Accordion";

const RecruitCarouselImages = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images1"></div>
          <div className="section">
            <RecruitmentProcess />
          </div>
          <div className="section images4">
            <FAQAccordion />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default RecruitCarouselImages;
