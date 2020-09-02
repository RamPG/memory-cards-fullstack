import { LoginStateType } from '../../types/state-types';
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions-constant';

const initialState: LoginStateType = {
  error: '',
  isLoading: false,
  success: '',
  token: '',
};

export function loginReducer(state: LoginStateType = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        error: '',
        isLoading: true,
        success: '',
        token: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload.message,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
