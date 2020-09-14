import React from 'react';
import { Redirect } from 'react-router-dom';

import { useVerifyToken } from '../../hooks/use-verify';
import { Cards } from '../cards';

export const CardsPage = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isSuccess) {
    return <Cards />;
  }
  if (isError) {
    return <Redirect to="/login" />;
  }
  return <h1>Verifying...</h1>;
};
