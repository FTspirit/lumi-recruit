import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logolumi from "../../Asset/image/logolumi.jpg";
import styled from "styled-components";
// --- 01 TYPOGRAPHY SYSTEM

// - Font sizes (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
// Primary color: #028b51
const StyledContainer = styled(Container)``;
const StyleRow = styled(Row)``;
const Styledlogo = styled.img`
  width: 30rem;
`;
const StyledNavbarText = styled.div`
  font-size: 3rem;
`;
const StyledColumn = styled(Col)`
  display: flex;
  justify-content: center;
  &:hover {
    color: #028b51;
  }
`;
function Navbar() {
  return (
    <StyledContainer fluid>
      <StyleRow className="d-flex justify-content-center align-items-center">
        <Col>
          <Styledlogo src={logolumi} alt="logo lumi" />
        </Col>
        <StyledColumn>
          <StyledNavbarText>Trang chủ</StyledNavbarText>
        </StyledColumn>
        <StyledColumn>
          <StyledNavbarText>Tuyển dụng</StyledNavbarText>
        </StyledColumn>
        <StyledColumn>
          <StyledNavbarText>Đời sống LUMIER</StyledNavbarText>
        </StyledColumn>
        <StyledColumn>
          <StyledNavbarText>Blog</StyledNavbarText>
        </StyledColumn>
        <col></col>
      </StyleRow>
    </StyledContainer>
  );
}
export default Navbar;
