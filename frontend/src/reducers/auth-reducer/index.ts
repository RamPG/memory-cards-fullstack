import { AuthStateType } from '../../types/state-types';
import {
  AUTH_SUCCESS,
  AUTH_FAILURE, AUTH_REQUEST,
} from './action-constants';

const initialState: AuthStateType = {
  isLoading: true,
  isSuccess: false,
  isError: false,
};

export function authReducer(state: AuthStateType = initialState, action: any) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case AUTH_FAILURE:
      return {
        isSuccess: false,
        isLoading: false,
        isError: true,
      };
    case AUTH_SUCCESS:
      return {
        isError: false,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
}
