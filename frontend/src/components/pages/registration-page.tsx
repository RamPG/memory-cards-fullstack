import React from 'react';
import { Redirect } from 'react-router-dom';

import { useVerifyToken } from '../../hooks/use-verify';
import { RegistrationForm } from '../registration-form';

export const RegistrationPage = () => {
  const { isError, isSuccess } = useVerifyToken();
  if (isError) {
    return <RegistrationForm />;
  }
  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return <h1>Verifying...</h1>;
};
