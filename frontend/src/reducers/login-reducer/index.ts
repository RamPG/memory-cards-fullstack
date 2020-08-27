import { AuthenticationStateType } from '../../types/state-types';

const initialStateType: AuthenticationStateType = {
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export function loginReducer(state: AuthenticationStateType = initialStateType, action: any) {
  return state;
}
