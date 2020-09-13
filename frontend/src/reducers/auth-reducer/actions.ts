import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from './action-constants';
import { MemoryCardApi } from '../../services/memory-card-api';
import {
  AuthFailureActionType,
  AuthRequestActionType,
  AuthSuccessActionType,
} from '../../types/action-types/auth-action-types';
import { DispatchType } from '../../types/action-types';

export function authRequest(): AuthRequestActionType {
  return {
    type: AUTH_REQUEST,
  };
}
export function authFailure(): AuthFailureActionType {
  return {
    type: AUTH_FAILURE,
  };
}

export function authSuccess(): AuthSuccessActionType {
  return {
    type: AUTH_SUCCESS,
  };
}

export function authCheck(memoryCardApi: MemoryCardApi) {
  return (dispatch: DispatchType) => {
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
