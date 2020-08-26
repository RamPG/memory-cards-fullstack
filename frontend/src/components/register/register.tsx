import React from 'react';

import './register.scss';

export const Register = () => (
  <div className="container-fluid h-100 text-dark">
    <div className="row justify-content-center align-items-center h-100">
      <form className="">
        <h1>Register</h1>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);
