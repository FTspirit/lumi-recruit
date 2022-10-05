import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoLumi from "../../Asset/image/logoLumi.png";
import "./Navbar.scss";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar">
      <Container fluid className="navbarContainter">
        <Navbar.Brand className="navbarLogo">
          <Link to="/" className="navbar__brand">
            <img src={LogoLumi} alt="logo" className="lumiLogo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header />
          <Offcanvas.Body>
            <Nav className="justify-content-center">
              <Nav.Link
                as={Link}
                to="/"
                className="navbar__link"
                key="Home"
                eventKey="Home"
              >
                Trang chủ
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/tuyendung"
                className="navbar__link"
                key="Recruit"
                eventKey="Recruit"
              >
                Tuyển dụng
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/doisong"
                className="navbar__link"
                key="LumiLife"
                eventKey="LumiLife"
              >
                Đời sống LUMIER
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className="navbar__link"
                key="Blog"
                eventKey="Blog"
              >
                Blog
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default Navigation;
