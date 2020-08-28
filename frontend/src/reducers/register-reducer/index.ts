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
};

export function registerReducer(state: AuthenticationStateType = initialState, action: any) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        isError: false,
        isSuccess: false,
        isLoading: true,
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
