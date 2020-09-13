import React, { FunctionComponent, useState } from 'react';

import './registration-form.scss';

import { useField } from '../../hooks/use-field';
import { MemoryCardApi } from '../../services/memory-card-api';
import {
  registerFormValidation,
  ValidationResultType,
} from '../../utils/validation';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';

type RegisterProps = {
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  confirmPassword: string,
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
  validationStatus: string,
  serverStatus: string,
}

const RegistrationFormView: FunctionComponent<RegisterProps> = ({
  handleSubmit, email, setEmail, password, setPassword,
  confirmPassword, setConfirmPassword, validationStatus, serverStatus,
}) => (
  <div className="container-fluid h-100 text-dark">
    <div className="row justify-content-center align-items-center h-100">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
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
            value={password}
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
            value={confirmPassword}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setConfirmPassword)}
            required
          />
        </div>
        {
              serverStatus
            }
        {
              validationStatus
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

export const RegistrationForm: FunctionComponent = () => {
  const memoryCardApi: MemoryCardApi = useMemoryCardApi();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<string>('');
  const [serverStatus, setServerStatus] = useState<string>('');
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    const { isSuccess, message }: ValidationResultType = registerFormValidation(email, password, confirmPassword);
    if (isSuccess) {
      setServerStatus('Loading');
      memoryCardApi.getRegister({
        email,
        password,
      })
        .then(({ message }) => {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setValidationStatus('');
          setServerStatus(message);
        })
        .catch(({ message }) => {
          setValidationStatus('');
          setServerStatus(message);
        });
    } else {
      setServerStatus('');
      setValidationStatus(message);
    }
  }
  return (
    <RegistrationFormView
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      validationStatus={validationStatus}
      serverStatus={serverStatus}
    />
  );
};
