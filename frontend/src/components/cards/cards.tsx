import React from 'react';
import { Redirect } from 'react-router-dom';

import './cards.scss';

import { useVerifyToken } from '../../hooks/use-verify';

const CardsView = () => (
  <div>
    <div className="d-flex">
      <button type="button" className="btn btn-outline-primary">{'<'}</button>
      <p>
        Something
      </p>
      <button type="button" className="btn btn-outline-primary">{'>'}</button>
    </div>
    <div>
      <button type="button" className="btn btn-outline-success">Yes</button>
      <button type="button" className="btn btn-outline-danger">No</button>
    </div>
  </div>
);
export const Cards = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isSuccess) {
    return <CardsView />;
  }
  if (isError) {
    return <Redirect to="/login" />;
  }
  return <h1>Verifying...</h1>;
};
