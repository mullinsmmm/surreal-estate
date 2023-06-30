import '../styles/App.css';
import React from 'react';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Properties from './Properties';
import AddProperties from "./AddProperties";

const App = () => (
  <div className="App">
    <h1>Surreal Estate</h1>
    <NavBar />
    <Routes>
      <Route path="/" element={Properties} />
      <Route path="/" element={AddProperties} />
    </Routes>
  </div>
);

export default App;
