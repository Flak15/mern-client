import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import LinksPage from './pages/LinksPage';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Router>
                <Switch>
                    <Route path="/links" exact>
                        <LinksPage />
                    </Route>
                    
                    <Route path="/details/:id">
                        <DetailPage />
                    </Route>
                    <Route path="/create" exact>
                        <CreatePage />
                    </Route>
                    <Redirect to="/create" />
                </Switch>
            </Router>
         
        )
    }
    return (
       <Router>
            <Switch>
                <Route path="/auth" exact>
                    <AuthPage />
                </Route>
                <Redirect to="/" />
            </Switch>
       </Router>
        
    )
};