import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#">
        Memory Cards
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/cards/" className="nav-link" href="#">
              Cards
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/profile/" className="nav-link" href="#">
              Profile
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/login/" className="nav-link" href="#">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/register/" className="nav-link" href="#">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
