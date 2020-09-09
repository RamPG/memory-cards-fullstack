import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './login.scss';

import { useField } from '../../hooks/use-field';
import { MemoryCardApi } from '../../services/memory-card-api';
import { useMemoryCardApi } from '../../contexts/memory-card-api-context';
import { useVerifyToken } from '../../hooks/use-verify';
import { loginFormValidation } from '../../utils/validation';
import { authSuccess } from '../../reducers/auth-reducer/actions';

type LoginProps = {
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void,
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  validationStatus: string,
  serverStatus: string,
}

const LoginView: FunctionComponent<LoginProps> = ({
  handleSubmit, email, setEmail, password, setPassword, validationStatus, serverStatus,
}) => (
  <div className="container-fluid h-100 text-dark">
    <div className="row justify-content-center align-items-center h-100">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
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
            value={password}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setPassword)}
            required
          />
        </div>
        {
              validationStatus
            }
        {
              serverStatus
            }
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);
export const Login = () => {
  const memoryCardApi: MemoryCardApi = useMemoryCardApi();
  const dispatch = useDispatch();
  const { isError, isSuccess } = useVerifyToken();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<string>('');
  const [serverStatus, setServerStatus] = useState<string>('');
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    const { isSuccess, message } = loginFormValidation(email, password);
    if (isSuccess) {
      setServerStatus('Loading...');
      memoryCardApi.getLogin({
        email,
        password,
      })
        .then(() => {
          dispatch(authSuccess());
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
  if (isError) {
    return (
      <LoginView
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        validationStatus={validationStatus}
        serverStatus={serverStatus}
      />
    );
  }
  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return <h1>Verifying...</h1>;
};
