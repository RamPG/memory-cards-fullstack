import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions-constant';
import { MemoryCardApi } from '../../services/memory-card-api';
import { PostDataType } from '../../types/request-response-types';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginFailure(message: string) {
  return {
    type: LOGIN_FAILURE,
    payload: message,
  };
}

export function loginSuccess(message: string, token: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      message,
      token,
    },
  };
}

export function loginAttempt(data: PostDataType, memoryCardApi: MemoryCardApi) {
  return (dispatch: any) => {
    dispatch(loginRequest());
    return memoryCardApi.getLogin(data)
      .then(({ message, token }) => {
        dispatch(loginSuccess(message, token));
      })
      .catch((err) => {
        dispatch(loginFailure(err.message));
      });
  };
}
