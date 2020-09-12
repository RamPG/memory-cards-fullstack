import React from 'react';
import { Redirect } from 'react-router-dom';

import { useVerifyToken } from '../../hooks/use-verify';
import { AddWordForm } from '../add-word-form';
import { WordList } from '../word-list';
import { UpdateWordListButton } from '../update-word-list-button';

export const ProfilePage = () => {
  const { isSuccess, isError } = useVerifyToken();
  if (isSuccess) {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="list">
            <h1 className="text-center">Your words</h1>
            <WordList />
            <UpdateWordListButton />
          </div>
          <AddWordForm />
        </div>
      </div>
    );
  }
  if (isError) {
    return <Redirect to="/login" />;
  }
  return <h1>Verifying...</h1>;
};
