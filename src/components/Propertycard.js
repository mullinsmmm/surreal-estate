import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => (
  <div className="propertyCard">
    <div>
      <h2>{title}</h2>
    </div>
    <div>
      <img src="../img/Type.png" alt="Type Logo" />
      <span>{type}</span>
    </div>
    <div>
      <img src="../img/Bedrooms.png" alt="Bedrooms Logo" />
      <span>{bedrooms}</span>
    </div>
    <div>
      <img src="../img/Bathroom.png" alt="Bathrooms Logo" />
      <span>{bathrooms}</span>
    </div>
    <div>
      <img src="../img/Price.png" alt="Price Logo" />
      <span>{price}</span>
    </div>
    <div>
      <img src="../img/Location.png" alt="City Logo" />
      <span>{city}</span>
    </div>
    <div>
      <img src="../img/Email.png" alt="Email Logo" />
      <span>{email}</span>
    </div>
  </div>
);

export default PropertyCard;
