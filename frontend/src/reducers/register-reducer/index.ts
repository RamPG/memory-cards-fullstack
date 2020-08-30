import { AuthenticationStateType } from '../../types/state-types';
import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from './actions-constants';

const initialState: AuthenticationStateType = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export function registerReducer(state: AuthenticationStateType = initialState, action: any) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        isError: false,
        isSuccess: false,
        isLoading: true,
        message: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload,
      };
    default:
      return state;
  }
}
