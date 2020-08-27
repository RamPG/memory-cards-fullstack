import React, { useState } from 'react';

import './login.scss';
import { useField } from '../../hooks/use-field';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>): void {
    evt.preventDefault();
    console.log(email, password);

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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
