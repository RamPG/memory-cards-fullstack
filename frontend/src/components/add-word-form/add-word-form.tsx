import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './add-word-form.scss';

import { useDispatch } from 'react-redux';
import { useField } from '../../hooks/use-field';
import { addWord } from '../../reducers/profile-reducer/actions';

export const AddWordForm = () => {
  const [word, setWord] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(addWord(uuidv4(), word, description));
    setWord('');
    setDescription('');
  }
  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Add word</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Word"
            value={word}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setWord)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setDescription)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
};
