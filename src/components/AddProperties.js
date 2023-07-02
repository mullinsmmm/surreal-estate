import React, { useState } from 'react';
import '../styles/add-properties.css';

const AddProperties = () => {
  const initialState = {
    fields: {
      title: 'Post Title',
      bedrooms: '0',
      bathrooms: '0',
      price: '0',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-properties">
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            <span>Post Title:</span>
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            <span>City:</span>
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
        <div>
          <label htmlFor="type">
            <span>type:</span>
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
        <div>
          <label htmlFor="bedrooms">
            <span>Bedrooms:</span>
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            <span>Bathrooms:</span>
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            <span>Price:</span>
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span>Contact Email:</span>
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
