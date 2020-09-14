import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './add-word-form.scss';

import { useField } from '../../hooks/use-field';
import { addWord } from '../../reducers/profile-reducer/actions';
import { DispatchType } from '../../types/action-types';
import { addWordFormValidation } from '../../utils/validation';

export const AddWordForm = () => {
  const store = useStore();
  const [word, setWord] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const dispatch = useDispatch<DispatchType>();
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const { wordList } = store.getState().profile;
    if (wordList.length < 100) {
      const { message, isSuccess } = addWordFormValidation(word, description);
      if (isSuccess) {
        dispatch(addWord(uuidv4(), word, description));
        setWord('');
        setDescription('');
        setStatus(message);
      } else {
        setStatus(message);
      }
    } else {
      setStatus('Max limit exceeded!');
    }
  }
  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Add word</h1>
        <div className="form-group">
          <input
            minLength={1}
            maxLength={16}
            type="text"
            placeholder="Word"
            value={word}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => useField<string>(evt.target.value, setWord)}
          />
        </div>
        <div className="form-group">
          <textarea
            minLength={1}
            maxLength={512}
            placeholder="Description"
            value={description}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => useField<string>(evt.target.value, setDescription)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
        {
          status
        }
      </form>
    </div>
  );
};
