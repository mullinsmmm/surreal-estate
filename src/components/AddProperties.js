import React, { useState } from 'react';
import '../styles/add-properties.css';
import axios from 'axios';
import Alert from './Alert';

const AddProperties = () => {
  const initialState = {
    fields: {
      title: 'Describe the property',
      bedrooms: '0',
      bathrooms: '0',
      price: '0',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', isSuccess: false });

    const postData = {
      title: fields.title,
      type: fields.type,
      bedrooms: fields.bedrooms,
      bathrooms: fields.bathrooms,
      price: fields.price,
      city: fields.city,
      email: fields.email,
    };

    axios
      .post('http://localhost:4000/api/v1/PropertyListing', postData)
      .then(() => setAlert({
        message: 'Property Added',
        isSuccess: true,
      }))
      .catch(() => setAlert({
        message: 'Server error. Please try again later.',
        isSuccess: false,
      }));
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-properties">
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="formItem">
          <h1>Add A Property</h1>
          <label htmlFor="title">
            <span>Title</span>
            <br />
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="city">
            <span>City</span>
            <br />
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="type">
            <span>Property Type</span>
            <br />
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="bedrooms">
            <span>Bedrooms</span>
            <br />
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="bathrooms">
            <span>Bathrooms</span>
            <br />
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="price">
            <span>Price</span>
            <br />
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="formItem">
          <label htmlFor="email">
            <span>Contact Email</span>
            <br />
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperties;
