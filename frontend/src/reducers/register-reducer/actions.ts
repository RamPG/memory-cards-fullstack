import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from './actions-constants';
import { MemoryCardApi } from '../../services/memory-card-api';
import {
  RegisterFailureActionType,
  RegisterRequestActionType,
  RegisterSuccessActionType,
} from '../../types/actions-types';
import { PostDataType } from '../../types/request-response-types';

export function registerRequest(): RegisterRequestActionType {
  return {
    type: REGISTER_REQUEST,
  };
}

export function registerFailure(): RegisterFailureActionType {
  return {
    type: REGISTER_FAILURE,
  };
}

export function registerSuccess(message: string): RegisterSuccessActionType {
  return {
    type: REGISTER_SUCCESS,
    payload: message,
  };
}

export function registrationAttempt(data: PostDataType, memoryCardApi: MemoryCardApi) {
  return (dispatch: any) => {
    dispatch(registerRequest());
    return memoryCardApi.getRegistered(data)
      .then((message) => {
        dispatch(registerSuccess(message));
      })
      .catch(() => {
        dispatch(registerFailure());
      });
  };
}
