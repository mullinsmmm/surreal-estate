import React from 'react';

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
    <h2>{title}</h2>
    <p>{type}</p>
    <p>{bedrooms}</p>
    <p>{bathrooms}</p>
    <p>{price}</p>
    <p>{city}</p>
    <p>{email}</p>
  </div>
);

export default PropertyCard;
