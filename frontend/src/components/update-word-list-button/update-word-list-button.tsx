import React, { useState } from 'react';

import './update-word-list-button.scss';
import { useStore } from 'react-redux';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';

export const UpdateWordListButton = () => {
  const [status, setStatus] = useState<string>('');
  const store = useStore();
  const memoryCardApi = useMemoryCardApi();
  function onUpdateWordList(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setStatus('Loading...');
    memoryCardApi.updateWordList({
      wordList: store.getState().profile.wordList,
    })
      .then(() => {
        setStatus('Updated!');
      })
      .catch(() => {
        setStatus('Error');
      });
  }
  return (
    <>
      <button
        className="btn btn-outline-success"
        onClick={onUpdateWordList}
      >
        Save
      </button>
      {
          status
      }
    </>

  );
};
