import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <Link to={'/?query={"city": Manchester}'}>Manchester</Link>
    <Link to={'/?query={"city": Leeds}'}>Leeds</Link>
    <Link to={'/?query={"city": Liverpool}'}>Liverpool</Link>
    <Link to={'/?query={"city": Sheffield}'}>Sheffield</Link>
  </div>
);

export default Sidebar;
