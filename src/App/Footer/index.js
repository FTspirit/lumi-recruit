import { Container } from "react-bootstrap";
import "./Footer.scss";
import LogoLumi from "../../Asset/image/logoLumi.png";

//import logo
import facebooklogo from "../../Asset/image/facebook.png";
import instagramlogo from "../../Asset/image/Instagram.png";
import youtubelogo from "../../Asset/image/youtube.png";
import printerestlogo from "../../Asset/image/printerest.png";
function Footer() {
  return (
    <Container fluid className="Footer-Container">
      <img src={LogoLumi} alt="Logo-lumi" />
      <div className="Footer-Description">
        <p>Công ty cổ phần Lumi Việt Nam</p>
        <p>
          Số 38, Đỗ Đức Dục, phường Mễ Trì, quận Nam Từ Liêm, thành phố Hà Nội
        </p>
        <p>Hotline: 0904 665 965</p>
        <p>© 2021 Lumi., JSC. All rights reserved.</p>
      </div>
      <div>
        <img src={facebooklogo} alt="facebook logo" />
        <img src={instagramlogo} alt="instagram logo" />
        <img src={youtubelogo} alt="youtube logo" />
        <img src={printerestlogo} alt="printerest logo" />
      </div>
    </Container>
  );
}
export default Footer;
