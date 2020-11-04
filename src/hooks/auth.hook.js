import { useState, useCallback, useEffect } from 'react';
import { useHttp } from './http.hook';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);
  const { makeRequest } = useHttp();

  const login = useCallback((jwt, id) => {
    setToken(jwt);
    setUserId(id);
    localStorage.setItem('user', JSON.stringify({ token: jwt, userId: id }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    const validateToken = async (authData) => {
      try {
        await makeRequest('/api/auth/verify', 'POST', { token: authData.token });
        login(authData.token, authData.userId);
      } catch (e) {
        logout();
      }
      setReady(true);
    };
    validateToken(data);
  }, [login, makeRequest, logout]);
  return {
    token, userId, login, logout, ready,
  };
};
