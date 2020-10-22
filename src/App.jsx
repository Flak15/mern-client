import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';

function App() {
  const { token, userId, login, logout } = useAuth();
  const routes = useRoutes(!!token);
  return (
    <div className="container">
      {routes}
    </div>
  );
}

export default App;
