import React from 'react';

import { useVerifyToken } from '../../hooks/use-verify';

export const HomePage = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isSuccess) {
    return <h1>You are logged in</h1>;
  }
  if (isError) {
    return <h1>You are not logged in</h1>;
  }
  return <h1>Verifying...</h1>;
};
