import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './app.scss';

import { store } from '../../store';
import { NavigationBar } from '../navigation-bar';
import { MemoryCardApiContext } from '../../contexts/memory-card-api-context';
import { MemoryCardApi } from '../../services/memory-card-api';
import { LoginPage } from '../pages/login-page';
import { RegistrationPage } from '../pages/registration-page';
import { HomePage } from '../pages/home-page';
import { ProfilePage } from '../pages/profile-page';
import { CardsPage } from '../pages/cards-page';

const memoryCardApi = new MemoryCardApi();
export const App = () => (
  <Provider store={store}>
    <MemoryCardApiContext.Provider value={memoryCardApi}>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/cards" component={CardsPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MemoryCardApiContext.Provider>
  </Provider>

);
