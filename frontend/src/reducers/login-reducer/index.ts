import { AuthenticationStateType } from '../../types/state-types';
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions-constant';

const initialState: AuthenticationStateType = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export function loginReducer(state: AuthenticationStateType = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isError: false,
        isSuccess: false,
        isLoading: true,
        message: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
}
