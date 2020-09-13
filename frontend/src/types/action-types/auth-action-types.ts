import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from '../../reducers/auth-reducer/action-constants';

export type AuthRequestActionType = {
    type: typeof AUTH_REQUEST,
}

export type AuthFailureActionType = {
    type: typeof AUTH_FAILURE,
}

export type AuthSuccessActionType = {
    type: typeof AUTH_SUCCESS,
}

export type AuthActionsType = AuthRequestActionType | AuthFailureActionType | AuthSuccessActionType;
