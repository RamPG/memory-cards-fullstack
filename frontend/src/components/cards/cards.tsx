import React from 'react';

import './cards.scss';

export const Cards = () => (
  <div>
    <div className="d-flex">
      <button type="button" className="btn btn-outline-primary">{'<'}</button>
      <p>
        Something
      </p>
      <button type="button" className="btn btn-outline-primary">{'>'}</button>
    </div>
    <div>
      <button type="button" className="btn btn-outline-success">Yes</button>
      <button type="button" className="btn btn-outline-danger">No</button>
    </div>
  </div>
);
