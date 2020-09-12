import React, { FunctionComponent } from 'react';

import './word-list-element.scss';

type WordListElementType = {
    word: string,
    onDelete: () => void,
}
export const WordListElement: FunctionComponent<WordListElementType> = ({ word, onDelete }) => (
  <>
    <p>
      {word}
      <button
        onClick={onDelete}
        className="btn btn-outline-danger"
      >
        X
      </button>
    </p>
  </>
);
