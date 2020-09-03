import {
  BrowserRouter, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import React, {FunctionComponent} from 'react';
import { Navbar } from '../navbar';
import { Login } from '../login';
import { Register } from '../register';
import { Profile } from '../profile';
import { Cards } from '../cards';
import { useAuth } from '../../hooks/use-auth';

const SwitcherPass = () => (
  <BrowserRouter>
    <Navbar>
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
        <Link to="/logout" className="nav-link" href="#">
          Logout
        </Link>
      </li>
    </Navbar>
    <Switch>
      <Route path="/" render={() => <h2>Valid!</h2>} exact />
      <Route path="/profile" component={Profile} />
      <Route path="/cards" component={Cards} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
const SwitchNotPass = () => (
  <BrowserRouter>
    <Navbar>
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
    </Navbar>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" render={() => <h2>Invalid!</h2>} />
    </Switch>
  </BrowserRouter>
);
export const Switcher = () => {
  const { isLoading, isPass } = useAuth();
  if (isLoading) {
    return <h1>Check</h1>;
  }
  return isPass ? <SwitcherPass /> : <SwitchNotPass />;
};
