import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js'

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const handleLogout = (event) => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">MERN</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><a href="/" onClick={handleLogout}>Logout</a></li>
            </ul>
            </div>
        </nav>
    )
};