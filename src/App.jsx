import React from 'react';
import 'materialize-css';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader.jsx';


const App = () => {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return (<Loader />);
  }
  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuthenticated }}>
      <Router>
        { isAuthenticated ? <Navbar /> : ''}
        <div className="container">
          {routes}
        </div>
      </Router>
      
    </AuthContext.Provider>
    
  );
}

export default App;
