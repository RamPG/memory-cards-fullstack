import React from 'react';

export function useField<T>(value: T, setState: React.Dispatch<React.SetStateAction<T>>) {
  setState(value);
}
