import React, { useState } from 'react';

import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useField } from '../../hooks/use-field';
import { AuthenticationStateType, InitialStateType } from '../../types/state-types';
import { loginAttempt } from '../../reducers/login-reducer/actions';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoading, isError, isSuccess }: AuthenticationStateType = useSelector(
    (state: InitialStateType) => state.login,
  );
  let status = '';
  if (isLoading) {
    status = 'Loading...';
  }
  if (isError) {
    status = 'Error!';
  }
  if (isSuccess) {
    status = 'Login success';
  }
  const dispatch = useDispatch();
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    dispatch(loginAttempt({ email, password }));
  }
  return (
    <div className="container-fluid h-100 text-dark">
      <div className="row justify-content-center align-items-center h-100">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setEmail)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setPassword)}
              required
            />
          </div>
          {
            status
          }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
