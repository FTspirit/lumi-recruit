import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logolumi from "../../Asset/image/logolumi.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
// --- 01 TYPOGRAPHY SYSTEM

// - Font sizes (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
// Primary color: #028b51
const StyledContainer = styled(Container)`
  top: 0rem;
  right: 0rem;
  left: 0rem;
`;
const StyleRow = styled(Row)``;
const Styledlogo = styled.img`
  width: 18rem;
  cursor: pointer;
`;
const Stylelists = styled.ul`
  display: flex;
  gap: 10rem;
  justify-content: center;
  padding-left: 0rem;
  margin-bottom: 0rem;
  list-style: none;
`;
const StyleListItem = styled.li`
  font-size: 2rem;
  line-height: 6rem;
  a {
    text-decoration: none;
    color: #333;
  }
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #028b51;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
    border-radius: 2rem;
  }
  &.fromRight:after {
    transform-origin: 100% 50%;
  }
  &.fromLeft:after {
    transform-origin: 0% 50%;
  }
`;
function Navbar() {
  const setFixed = (event) => {};
  window.addEventListener("scroll", setFixed);
  return (
    <StyledContainer fluid>
      <StyleRow className="d-flex justify-content-center align-items-center">
        <Col lg={2}>
          <Styledlogo src={logolumi} alt="logo lumi" />
        </Col>
        <Col lg={8}>
          <Stylelists>
            <StyleListItem>
              <Link to="/"> Trang chủ </Link>
            </StyleListItem>
            <StyleListItem>
              <Link to="/tuyendung"> Tuyển dụng </Link>
            </StyleListItem>
            <StyleListItem>
              <Link to="/doisong"> Đời sống LUMIER </Link>
            </StyleListItem>
            <StyleListItem>
              <Link to="/blog"> Blog </Link>
            </StyleListItem>
          </Stylelists>
        </Col>
        <Col lg={2}></Col>
      </StyleRow>
    </StyledContainer>
  );
}
export default Navbar;
