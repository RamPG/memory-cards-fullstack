import React, { FunctionComponent, useState } from 'react';

import './register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useField } from '../../hooks/use-field';
import { registrationAttempt } from '../../reducers/register-reducer/actions';
import { InitialStateType, AuthenticationStateType } from '../../types/state-types';

export const Register: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const { isLoading, isError, isSuccess }: AuthenticationStateType = useSelector(
    (state: InitialStateType) => state.register,
  );
  let status = '';
  if (isLoading) {
    status = 'Loading...';
  }
  if (isError) {
    status = 'Error!';
  }
  if (isSuccess) {
    status = 'Register success';
  }
  const dispatch = useDispatch();
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    dispatch(registrationAttempt({ email, password, confirmPassword }));
  }
  return (
    <div className="container-fluid h-100 text-dark">
      <div className="row justify-content-center align-items-center h-100">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setConfirmPassword)}
              required
            />
          </div>
          {
            status
          }
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
