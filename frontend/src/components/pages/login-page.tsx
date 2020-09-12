import React from 'react';
import { Redirect } from 'react-router-dom';

import { useVerifyToken } from '../../hooks/use-verify';
import { LoginForm } from '../login-form';

export const LoginPage = () => {
  const { isError, isSuccess } = useVerifyToken();
  if (isError) {
    return <LoginForm />;
  }
  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return <h1>Verifying...</h1>;
};
