import React, { useState } from 'react';
import '../styles/add-properties.css';

const AddProperties = () => {
  const initialState = {
    fields: {
      title: 'Manchester',
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
        <label htmlFor="title">
          title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
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
        <button type="submit">Add</button>
      </form>
      Add Properties Page test
    </div>
  );
};

export default AddProperties;
