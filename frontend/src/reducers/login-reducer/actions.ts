import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions-constant';
import { MemoryCardApi } from '../../services/memory-card-api';
import { PostDataFormType } from '../../types/request-response-types';

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

export function loginSuccess(message: string, email: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      message,
      email,
    },
  };
}

export function loginAttempt(data: PostDataFormType, memoryCardApi: MemoryCardApi) {
  return (dispatch: any) => {
    dispatch(loginRequest());
    return memoryCardApi.getLogin(data)
      .then(({ message, email }) => {
        dispatch(loginSuccess(message, email));
      })
      .catch((err) => {
        dispatch(loginFailure(err.message));
      });
  };
}
