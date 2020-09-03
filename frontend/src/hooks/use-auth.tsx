import { useEffect, useState } from 'react';
import { useMemoryCardApi } from '../contexts/memory-card-api-context';

type UseAuthReturnType = {
  isPass: boolean,
  isLoading: boolean
};

export function useAuth(): UseAuthReturnType {
  const memoryCardApi = useMemoryCardApi();
  const [isPass, setIsPass] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    memoryCardApi.verifyToken()
      .then(() => {
        setIsLoading(false);
        setIsPass(true);
      })
      .catch(() => {
        setIsLoading(false);
        setIsPass(false);
      });
  }, []);
  return {
    isPass,
    isLoading,
  };
}
