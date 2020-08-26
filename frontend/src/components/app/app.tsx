import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

import { Navbar } from '../navbar';
import { Login } from '../login';
import { Register } from '../register';
import { Profile } from '../profile';
import { Cards } from '../cards';

export const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/cards" component={Cards} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </BrowserRouter>
  </>
);
