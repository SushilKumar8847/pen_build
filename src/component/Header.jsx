import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ username }) => (
  <div className="bg-primary text-white py-4">
    <div className="container">
      <div className="row text-center text-md-start">
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0">
          <h1 className="display-4 mb-0">{username ? username.toUpperCase() : "Default Name"}</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
          <Link to={`/${username}`} className="btn btn-warning mx-2">Home</Link>
          <Link to={`/${username}/about`} className="btn btn-light mx-2">About</Link>
          <Link to={`/${username}/contact`} className="btn btn-light mx-2">Contact</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
