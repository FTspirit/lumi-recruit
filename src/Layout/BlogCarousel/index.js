import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./BlogCarousel.scss";

const BlogCarousel = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed={1000} /* Options here */
    responsiveHeight={600}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section images9"></div>
          <div className="section images10"></div>
          <div className="section images11"></div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default BlogCarousel;
