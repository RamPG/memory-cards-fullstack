import React, { FunctionComponent, useState } from 'react';

import './register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useField } from '../../hooks/use-field';
import { registrationAttempt } from '../../reducers/register-reducer/actions';
import { InitialStateType, RegistrationStateType } from '../../types/state-types';
import { MemoryCardApi } from '../../services/memory-card-api';
import {
  registerFormValidation,
  ValidationResultType,
} from '../../utils/validation';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';

export const Register: FunctionComponent = () => {
  const memoryCardApi: MemoryCardApi = useMemoryCardApi();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<string>('');
  const {
    isLoading, error, success,
  }: RegistrationStateType = useSelector(
    (state: InitialStateType) => state.register,
  );
  let serverStatus = '';
  if (isLoading) {
    serverStatus = 'Loading...';
  }
  if (error) {
    serverStatus = error;
  }
  if (success) {
    serverStatus = success;
  }
  const dispatch = useDispatch();
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    const { isSuccess, message }: ValidationResultType = registerFormValidation(email, password, confirmPassword);
    if (isSuccess) {
      setValidationStatus('');
      dispatch(registrationAttempt({ email, password }, memoryCardApi));
    } else {
      setValidationStatus(message);
    }
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
              minLength={8}
              maxLength={16}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setPassword)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              minLength={8}
              maxLength={16}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setConfirmPassword)}
              required
            />
          </div>
          {
            validationStatus
          }
          {
            serverStatus
          }
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <p><b>Password must contain the following:</b></p>
          <p>
            A
            {' '}
            <b>lowercase</b>
            {' '}
            letter
          </p>
          <p>
            A
            {' '}
            <b>capital (uppercase)</b>
            {' '}
            letter
          </p>
          <p>
            A
            {' '}
            <b>number</b>
          </p>
          <p>
            <b>8-16 characters</b>
          </p>
        </form>
      </div>
    </div>
  );
};
