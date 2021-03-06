import {
  FETCH_WORD_LIST_REQUEST,
  FETCH_WORD_LIST_FAILURE,
  FETCH_WORD_LIST_SUCCESS,
  ADD_WORD,
  DELETE_WORD,
} from './action-constants';
import { WordListType } from '../../types/state-types';
import { MemoryCardApi } from '../../services/memory-card-api';
import {
  AddWordActionType, DeleteWordActionType,
  WordListFailureActionType,
  WordListRequestActionType,
  WordListSuccessActionType,
} from '../../types/action-types/profile-action-types';
import { DispatchType } from '../../types/action-types';

export function wordListRequest(): WordListRequestActionType {
  return {
    type: FETCH_WORD_LIST_REQUEST,
  };
}

export function wordListFailure(message: string): WordListFailureActionType {
  return {
    type: FETCH_WORD_LIST_FAILURE,
    payload: message,
  };
}

export function wordListSuccess(wordList: Array<WordListType>): WordListSuccessActionType {
  return {
    type: FETCH_WORD_LIST_SUCCESS,
    payload: wordList,
  };
}

export function fetchWordList(memoryCardApi: MemoryCardApi) {
  return (dispatch: DispatchType) => {
    dispatch(wordListRequest());
    memoryCardApi.fetchWordList()
      .then(({ wordList }) => {
        dispatch(wordListSuccess(wordList));
      })
      .catch((err) => {
        dispatch(wordListFailure(err));
      });
  };
}

export function addWord(id: string, word: string, description: string): AddWordActionType {
  return {
    type: ADD_WORD,
    payload: {
      id,
      word,
      description,
    },
  };
}

export function deleteWord(id: string): DeleteWordActionType {
  return {
    type: DELETE_WORD,
    payload: id,
  };
}
