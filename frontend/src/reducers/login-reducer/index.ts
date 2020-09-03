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
  email: '',
};

export function loginReducer(state: LoginStateType = initialState, action: any) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        error: '',
        isLoading: true,
        success: '',
        email: '',
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
        email: action.payload.email,
      };
    default:
      return state;
  }
}
