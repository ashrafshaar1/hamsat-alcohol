const MenuItem = ({ title, description, price, image, alt }) => {
  return (
    <div className="menu-item">
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">{price}</p>
      </div>
      <img src={image} alt={alt} className="item-image" />
    </div>
  );
};

export default MenuItem;