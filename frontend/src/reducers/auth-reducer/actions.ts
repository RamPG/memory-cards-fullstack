import {
  AUTH_FAILURE, AUTH_REQUEST,
  AUTH_SUCCESS,
} from './action-constants';
import { MemoryCardApi } from '../../services/memory-card-api';

export function authRequest() {
  return {
    type: AUTH_REQUEST,
  };
}
export function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}

export function authSuccess() {
  return {
    type: AUTH_SUCCESS,
  };
}

export function authCheck(memoryCardApi: MemoryCardApi) {
  return (dispatch: any, getState: any) => {
    dispatch(authRequest());
    memoryCardApi.verifyToken()
      .then(() => {
        dispatch(authSuccess());
      })
      .catch(() => {
        dispatch(authFailure());
      });
  };
}
