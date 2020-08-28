import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actions-constant';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginAttempt(data: any) {
  return (dispatch: any, getState: any) => {
    dispatch(loginRequest());
    return fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        dispatch(loginSuccess());
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
  };
}
