import React from 'react';
import { MemoryCardApi } from '../services/memory-card-api';

const MemoryCardApiContext = React.createContext(new MemoryCardApi());

export { MemoryCardApiContext };
