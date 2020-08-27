import { AuthenticationStateType } from '../../types/state-types';
import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from './actions-constants';

const initialStateType: AuthenticationStateType = {
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export function registerReducer(state: AuthenticationStateType = initialStateType, action: any) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
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
      };
    default:
      return state;
  }
}
