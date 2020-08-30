import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from '../../reducers/register-reducer/actions-constants';

export type RegisterRequestActionType = {
    type: typeof REGISTER_REQUEST,
};

export type RegisterFailureActionType = {
    type: typeof REGISTER_FAILURE,
};

export type RegisterSuccessActionType = {
    type: typeof REGISTER_SUCCESS,
    payload: string,
}
