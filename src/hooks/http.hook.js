import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }
      try {
        const res = await fetch(url, { method, body, headers });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'something went wrong during the query');
        }
        setIsLoading(false);
        return data;
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => setError(null), []);
  return { isLoading, error, makeRequest, clearError };
}