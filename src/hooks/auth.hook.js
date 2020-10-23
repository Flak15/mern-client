import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

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
        const data = localStorage.getItem('user');
        if (data && data.token) {
            console.log('logined');
            login(data.token, data.userId);
        }
    }, [login]);
    return { token, userId, login, logout };
}