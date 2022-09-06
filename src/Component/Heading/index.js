import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logolumi from "../../Asset/image/logolumi.jpg";
import styled from "styled-components";
import { useState } from "react";
// --- 01 TYPOGRAPHY SYSTEM

// - Font sizes (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
// Primary color: #028b51
const StyledContainer = styled(Container)`
  position: sticky;
  top: 0rem;
  right: 0rem;
  left: 0rem;
`;
const StyleRow = styled(Row)``;
const Styledlogo = styled.img`
  width: 18rem;
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
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #028b51;
    }
  }
  cursor: pointer;
`;
function Navbar() {
  const [fix, setFix] = useState(false);
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
              <a href="/">Trang chủ</a>
            </StyleListItem>
            <StyleListItem>
              <a href="/">Tuyển dụng</a>
            </StyleListItem>
            <StyleListItem>
              <a href="/">Đời sống LUMIER</a>
            </StyleListItem>
            <StyleListItem>
              <a href="/">Blog</a>
            </StyleListItem>
          </Stylelists>
        </Col>
        <Col lg={2}></Col>
      </StyleRow>
    </StyledContainer>
  );
}
export default Navbar;
