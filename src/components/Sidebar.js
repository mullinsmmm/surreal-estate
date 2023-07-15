import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [query, setQuery] = useState('');
  const { search } = useLocation();
  const navigate = useNavigate();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString('query', { title: { $regex: query } });

    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <img src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="logo" className="NavBarLogo" />
      <h1>Filter & Search Properties</h1>
      <div className="links">
        <Link to={buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
        <Link to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
        <Link to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
        <Link to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
      </div>
      <div className="price">
        <Link to={buildQueryString('sort', { price: 1 })}>Price: High</Link>
        <Link to={buildQueryString('sort', { price: -1 })}>Price: Low</Link>
      </div>
      <div className="submit">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="button" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
