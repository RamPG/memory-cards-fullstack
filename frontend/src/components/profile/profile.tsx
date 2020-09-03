import React from 'react';

import './profile.scss';

export const Profile = () => (
  <div className="container">
    <h1 className="text-center">Your words</h1>
    <div className="d-flex justify-content-between">
      <div className="list">
        <ul className="list-group">
          <li className="list-group-item">
            <p>
              Something
              <button className="btn btn-outline-danger">
                X
                  </button>
            </p>
          </li>
          <li className="list-group-item">
            <p>
              Something
              <button className="btn btn-outline-danger">
                X
                  </button>
            </p>
          </li>
          <li className="list-group-item">
            <p>
              Something
              <button className="btn btn-outline-danger">
                X
                  </button>
            </p>
          </li>
          <li className="list-group-item">
            <p>
              Something
              <button className="btn btn-outline-danger">
                X
                  </button>
            </p>
          </li>
        </ul>
        <button className="btn btn-outline-success">
          Save
        </button>
      </div>
      <div className="form-add">
        <form className="">
          <h1>Add word</h1>
          <div className="form-group">
            <input type="text" placeholder="Word" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Description" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
);
