import { Container } from "react-bootstrap";
import "./Footer.scss";

//import logo
import facebooklogo from "../../Asset/image/Facebooklogo.png";
import instagramlogo from "../../Asset/image/Instagram.png";
import youtubelogo from "../../Asset/image/youtube.png";
import printerestlogo from "../../Asset/image/printerest.png";
function Footer() {
  return (
    <Container fluid className="Footer-Container">
      <div className="Footer-Container--Logo">
        <div className="logo">
          <img src={facebooklogo} alt="facebook logo" />
        </div>
        <div className="logo">
          <img src={instagramlogo} alt="instagram logo" />
        </div>
        <div className="logo">
          <img src={youtubelogo} alt="youtube logo" />
        </div>
        <div className="logo">
          <img src={printerestlogo} alt="printerest logo" />
        </div>
      </div>
      <div className="Footer-Description">
        <p>© 2021 Lumi., JSC. All rights reserved.</p>
      </div>
    </Container>
  );
}
export default Footer;
