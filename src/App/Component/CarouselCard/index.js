function CarouselCard({ title, description, image, imageAlt }) {
  return (
    <div className="carousel-card">
      <img src={image} alt={imageAlt} />
      <div className="carousel-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default CarouselCard;
