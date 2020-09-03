import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar: FunctionComponent = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#">
        Memory Cards
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {props.children}
        </ul>
      </div>
    </div>
  </nav>
);
