import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './Propertycard';
import Alert from './Alert';
import '../styles/properties.css';
import Sidebar from './Sidebar';

const initialState = {
  properties: [],
};

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState({ message: '' });

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch(() => setProperties({
        message: 'Server error. Please try again later.',
        isSuccess: false,
      }));
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <Sidebar />
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
