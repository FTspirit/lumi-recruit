import styled from "styled-components";

const StyledVideo = styled.div`
  margin: 10rem;
  text-align: center;
`;
function Youtubevid() {
  return (
    <StyledVideo>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dhbRRpxKGNk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </StyledVideo>
  );
}

export default Youtubevid;
