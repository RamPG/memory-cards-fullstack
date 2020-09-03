import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { store } from '../../store';
import { Navbar } from '../navbar';
import { MemoryCardApiContext } from '../../contexts/memory-card-api-context';
import { MemoryCardApi } from '../../services/memory-card-api';
import { Switcher } from '../switcher';

const memoryCardApi = new MemoryCardApi();
export const App = () => (
  <Provider store={store}>
    <MemoryCardApiContext.Provider value={memoryCardApi}>
      <Switcher />
    </MemoryCardApiContext.Provider>
  </Provider>

);
