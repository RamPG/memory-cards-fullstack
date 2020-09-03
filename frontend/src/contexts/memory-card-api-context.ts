import React, { useContext } from 'react';
import { MemoryCardApi } from '../services/memory-card-api';

const MemoryCardApiContext = React.createContext(new MemoryCardApi());

export function useMemoryCardApi() {
  return useContext(MemoryCardApiContext);
}
export { MemoryCardApiContext };
