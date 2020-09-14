import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './cards.scss';
import { InitialStateType } from '../../types/state-types';
import { DispatchType } from '../../types/action-types';
import { fetchWordList } from '../../reducers/profile-reducer/actions';
import { MemoryCardApi } from '../../services/memory-card-api';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';

export const Cards = () => {
  const {
    isLoading, error, wordList,
  } = useSelector((initialState: InitialStateType) => initialState.profile);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [descriptionFlag, setDescriptionFlag] = useState<boolean>(false);
  const dispatch = useDispatch<DispatchType>();
  const memoryCardApi: MemoryCardApi = useMemoryCardApi();
  useEffect(() => {
    dispatch(fetchWordList(memoryCardApi));
  }, []);
  function onNextWord(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (currentWordIndex + 1 === wordList.length) {
      setCurrentWordIndex(0);
    } else {
      setCurrentWordIndex((prevState) => prevState + 1);
    }
    setDescriptionFlag(false);
  }
  function onPrevWord(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    if (currentWordIndex - 1 === -1) {
      setCurrentWordIndex(wordList.length - 1);
    } else {
      setCurrentWordIndex((prevState) => prevState - 1);
    }
    setDescriptionFlag(false);
  }
  function onShowDescription(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    setDescriptionFlag(true);
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  if (!wordList.length) {
    return <h1>You haven't added words to your dictionary yet</h1>;
  }
  return (
    <div className="cards">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={onPrevWord}
        >
          Prev
        </button>
        <h1>
          {wordList[currentWordIndex].word}
        </h1>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={onNextWord}
        >
          Next
        </button>
      </div>
      {
        descriptionFlag
        && (
        <div className="d-flex justify-content-center">
          <h1 className="text-center">
            {wordList[currentWordIndex].description}
          </h1>
        </div>
        )
      }
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-outline-danger btn-lg"
          onClick={onShowDescription}
        >
          Show description
        </button>
      </div>
    </div>
  );
};
