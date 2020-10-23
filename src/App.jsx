import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuthenticated }}>
      <div className="container">
        {routes}
      </div>
    </AuthContext.Provider>
    
  );
}

export default App;
