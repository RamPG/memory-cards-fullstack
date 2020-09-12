import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemoryCardApi } from '../contexts/memory-card-api-context';
import { InitialStateType } from '../types/state-types';
import { authCheck } from '../reducers/auth-reducer/actions';

export function useVerifyToken() {
  const { isSuccess, isError } = useSelector((initialState: InitialStateType) => initialState.auth);
  const dispatch = useDispatch();
  const memoryCardApi = useMemoryCardApi();
  useEffect(() => {
    dispatch(authCheck(memoryCardApi));
  }, []);
  return {
    isSuccess,
    isError,
  };
}
