import Carousel from "react-bootstrap/Carousel";
import "./app.scss";
function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://lumi.vn/wp-content/uploads/2021/01/Cover-doanh-nghiep-KHCN-desktop-2048x779.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://lumi.vn/wp-content/uploads/2022/07/Thiet-ke-chua-co-ten-8.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://lumi.vn/wp-content/uploads/2022/05/cover-website-1-2048x759.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
