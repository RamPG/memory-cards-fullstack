import React, { useEffect } from 'react';
import './word-list.scss';

import { useDispatch, useSelector } from 'react-redux';
import { InitialStateType } from '../../types/state-types';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';
import { deleteWord, fetchWordList } from '../../reducers/profile-reducer/actions';
import { WordListElement } from '../word-list-element';
import { MemoryCardApi } from '../../services/memory-card-api';
import { DispatchType } from '../../types/action-types';

export const WordList = () => {
  const dispatch = useDispatch<DispatchType>();
  const memoryCardApi: MemoryCardApi = useMemoryCardApi();
  const { isLoading, error, wordList } = useSelector((initialState: InitialStateType) => initialState.profile);
  useEffect(() => {
    dispatch(fetchWordList(memoryCardApi));
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <div>
      <h1>{`${wordList.length}/100`}</h1>
      <ul className="list-group">
        {
            wordList.map((element) => (
              <li key={element.id} className="list-group-item">
                <WordListElement word={element.word} onDelete={() => dispatch(deleteWord(element.id))} />
              </li>
            ))
          }
      </ul>
    </div>
  );
};
