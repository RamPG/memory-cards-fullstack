import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './logout-button.scss';

import { useMemoryCardApi } from '../../contexts/memory-card-api-context';
import {authFailure, authSuccess} from '../../reducers/auth-reducer/actions';

export const LogoutButton = () => {
  const memoryCardApi = useMemoryCardApi();
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    memoryCardApi.getLogout()
      .then(() => {
        dispatch(authFailure());
        history.push('/');
      })
      .catch(() => {
        dispatch(authSuccess());
        history.push('/');
      });
  };
  return (
    <button onClick={onLogout}>
      Logout
    </button>
  );
};
