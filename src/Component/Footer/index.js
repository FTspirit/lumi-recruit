import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logolumi from "../../Asset/image/logolumi.jpg";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const StyledLogo = styled(Col)`
  display: flex;
  align-items: center;
`;
const Styledlogo = styled.img`
  width: 20rem;
`;
const StyledLink = styled.a`
  .iconFooter {
    color: #028b51;
    width: 3.5rem;
    height: 3.5rem;
  }
`;
const StyledText = styled(Col)`
  text-align: center;
`;
const StyledIcons = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
`;
function Footer() {
  return (
    <Container fluid>
      <Row>
        <StyledLogo>
          <Styledlogo src={logolumi} alt="logo-lumi" />
        </StyledLogo>
        <StyledText>
          <h2>
            <p>CÔNG TY CỔ PHẦN LUMI VIỆT NAM</p>
            <p>Công ty hàng đầu Việt Nam trong lĩnh vực nhà thông minh</p>
            <p>
              Địa chỉ: Số 38, Đỗ Đức Dục, phường Mễ Trì, quận Nam Từ Liêm, thành
              phố Hà Nội
            </p>
          </h2>
        </StyledText>
        <StyledIcons>
          <StyledLink href="https://www.facebook.com/lumijsc">
            <BsFacebook className="iconFooter"></BsFacebook>
          </StyledLink>
          <StyledLink href="https://www.instagram.com/lumivietnam/">
            <BsInstagram className="iconFooter"></BsInstagram>
          </StyledLink>
          <StyledLink href="https://www.youtube.com/c/LumiSmartHomeOfficial">
            <BsYoutube className="iconFooter"></BsYoutube>
          </StyledLink>
        </StyledIcons>
      </Row>
    </Container>
  );
}
export default Footer;
