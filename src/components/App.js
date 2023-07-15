import '../styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperties from './AddProperties';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/view-properties" element={<Properties />} />
      <Route path="/add-properties" element={<AddProperties />} />
    </Routes>
  </div>
);

export default App;
