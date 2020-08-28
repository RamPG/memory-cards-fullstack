import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from './actions-constants';

export function registerRequest() {
  return {
    type: REGISTER_REQUEST,
  };
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registrationAttempt(data: any) {
  return (dispatch: any, getState: any) => {
    dispatch(registerRequest());
    return fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        dispatch(registerSuccess());
      })
      .catch((err) => {
        dispatch(registerFailure());
      });
  };
}
