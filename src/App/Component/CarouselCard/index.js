import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CarouselCard.scss";
function CarouselCard({ title, description, image, imageAlt }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        alt={imageAlt}
        className="CarouselCard-Image"
      />
      <Card.Body>
        <Card.Title className="CarouselCard-Title">{title}</Card.Title>
        <Card.Text className="CarouselCard-Description">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CarouselCard;
