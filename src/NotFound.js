// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NotFound() {
  return (
    <div className="App">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="nav_link">Go to Home</Link>
    </div>
  );
}

export default NotFound;
