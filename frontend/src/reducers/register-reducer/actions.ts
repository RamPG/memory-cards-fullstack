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
import { PostDataFormType } from '../../types/request-response-types';

export function registerRequest(): RegisterRequestActionType {
  return {
    type: REGISTER_REQUEST,
  };
}

export function registerFailure(message: string): RegisterFailureActionType {
  return {
    type: REGISTER_FAILURE,
    payload: message,
  };
}

export function registerSuccess(message: string): RegisterSuccessActionType {
  return {
    type: REGISTER_SUCCESS,
    payload: message,
  };
}

export function registrationAttempt(data: PostDataFormType, memoryCardApi: MemoryCardApi) {
  return (dispatch: any) => {
    dispatch(registerRequest());
    return memoryCardApi.getRegister(data)
      .then(({ message }) => {
        dispatch(registerSuccess(message));
      })
      .catch((err) => {
        dispatch(registerFailure(err.message));
      });
  };
}
