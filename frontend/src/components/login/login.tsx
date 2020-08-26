import React from 'react';

import './login.scss';

export const Login = () => (
  <div className="container-fluid h-100 text-dark">
    <div className="row justify-content-center align-items-center h-100">
        <form className="">
          <h1>Sign in</h1>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
);
