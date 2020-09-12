import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navigation-bar.scss';
import { useVerifyToken } from '../../hooks/use-verify';
import { LogoutButton } from '../logout-button';

const NavigationBarWrapper: FunctionComponent = (props: PropsWithChildren<{}>) => (
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
const NavigationBarAuth = () => (
  <NavigationBarWrapper>
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
      <LogoutButton />
    </li>
  </NavigationBarWrapper>
);
const NavigationBarNotAuth = () => (
  <NavigationBarWrapper>
    <li className="nav-item active">
      <Link to="/login" className="nav-link" href="#">
        Login
      </Link>
    </li>
    <li className="nav-item active">
      <Link to="/registration" className="nav-link" href="#">
        Register
      </Link>
    </li>
  </NavigationBarWrapper>
);
export const NavigationBar = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isError) {
    return <NavigationBarNotAuth />;
  }
  if (isSuccess) {
    return <NavigationBarAuth />;
  }
  return <h1>Verifying...</h1>;
};
