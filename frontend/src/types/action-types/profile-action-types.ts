import {
  FETCH_WORD_LIST_REQUEST,
  FETCH_WORD_LIST_FAILURE,
  FETCH_WORD_LIST_SUCCESS,
  ADD_WORD,
  DELETE_WORD,
} from '../../reducers/profile-reducer/action-constants';
import { WordListType } from '../state-types';

export type WordListRequestActionType = {
    type: typeof FETCH_WORD_LIST_REQUEST,
}

export type WordListFailureActionType = {
    type: typeof FETCH_WORD_LIST_FAILURE,
    payload: string,
}

export type WordListSuccessActionType = {
    type: typeof FETCH_WORD_LIST_SUCCESS,
    payload: Array<WordListType>,
}

export type AddWordActionType = {
    type: typeof ADD_WORD,
    payload: WordListType,
}

export type DeleteWordActionType = {
    type: typeof DELETE_WORD,
    payload: string,
}

export type ProfileActionsType = WordListRequestActionType | WordListFailureActionType |
    WordListSuccessActionType | AddWordActionType | DeleteWordActionType;
