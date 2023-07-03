import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './Propertycard';
import Alert from './Alert';
import '../styles/properties.css';

const initialState = {
  properties: [],
};

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch(() => setProperties({
        message: 'Server error. Please try again later.',
        isSuccess: false,
      }));
  }, []);

  return (
    <div className="properties">
      <h1>Properties</h1>
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard key={property._id} {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;

// REQUIRES ALERT FUNCTION
