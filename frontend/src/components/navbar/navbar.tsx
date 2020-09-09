import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navbar.scss';
import { useVerifyToken } from '../../hooks/use-verify';
import { Logout } from '../logout';

const NavbarWrapper: FunctionComponent = (props: PropsWithChildren<{}>) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#">
        Memory Cards
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ml-auto">{props.children}</ul>
      </div>
    </div>
  </nav>
);
const NavbarAuth = () => (
  <NavbarWrapper>
    <li className="nav-item active">
      <Link to="/cards" className="nav-link" href="#">
        Cards
      </Link>
    </li>
    <li className="nav-item active">
      <Link to="/profile" className="nav-link" href="#">
        Profile
      </Link>
    </li>
    <li className="nav-item active">
      <Logout />
    </li>
  </NavbarWrapper>
);
const NavbarNotAuth = () => (
  <NavbarWrapper>
    <li className="nav-item active">
      <Link to="/login" className="nav-link" href="#">
        Login
      </Link>
    </li>
    <li className="nav-item active">
      <Link to="/register" className="nav-link" href="#">
        Register
      </Link>
    </li>
  </NavbarWrapper>
);
export const Navbar = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isError) {
    return <NavbarNotAuth />;
  }
  if (isSuccess) {
    return <NavbarAuth />;
  }
  return <h1>Verifying...</h1>;
};
