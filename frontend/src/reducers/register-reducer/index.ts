import { RegistrationStateType } from '../../types/state-types';
import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from './actions-constants';

const initialState: RegistrationStateType = {
  error: '',
  isLoading: false,
  success: '',
};

export function registerReducer(state: RegistrationStateType = initialState, action: any) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        error: '',
        isLoading: true,
        success: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    default:
      return state;
  }
}
