import React from 'react';

import './home.scss';

import { useVerifyToken } from '../../hooks/use-verify';

export const Home = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isSuccess) {
    return <h1>You are logged in</h1>;
  }
  if (isError) {
    return <h1>You are not logged in</h1>;
  }
  return <h1>Verifying...</h1>;
};
