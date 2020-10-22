import { useState, useCallback } from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((jwt, id) => {
        setToken(jwt);
        setUserId(id);
        localStorage.setItem('user', JSON.stringify({ token, userId }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('user');
    }, []);
    return { token, userId, login, logout };
}