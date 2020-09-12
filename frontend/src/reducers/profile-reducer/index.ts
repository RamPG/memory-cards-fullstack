import { ProfileStateType, WordListType } from '../../types/state-types';
import {
  ADD_WORD,
  DELETE_WORD,
  FETCH_WORD_LIST_FAILURE,
  FETCH_WORD_LIST_REQUEST,
  FETCH_WORD_LIST_SUCCESS,
} from './action-constants';

const initialState: ProfileStateType = {
  isSuccess: false,
  error: '',
  isLoading: true,
  wordList: [],
};

function removeItem(array: Array<WordListType>, id: string) {
  const index = array.findIndex((element) => element.id === id);
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function profileReducer(state: ProfileStateType = initialState, action: any) {
  switch (action.type) {
    case FETCH_WORD_LIST_REQUEST:
      return {
        isSuccess: false,
        error: '',
        isLoading: true,
        wordList: [],
      };
    case FETCH_WORD_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_WORD_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        wordList: action.payload,
      };
    case ADD_WORD:
      return {
        ...state,
        wordList: [
          ...state.wordList,
          action.payload,
        ],
      };
    case DELETE_WORD:
      return {
        ...state,
        wordList: removeItem(state.wordList, action.payload),
      };
    default:
      return state;
  }
}
