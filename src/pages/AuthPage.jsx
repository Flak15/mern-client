// @ts-check

import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';


export default () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, makeRequest, clearError } = useHttp();
  const [form, setForm] = useState({ email: '', password: '' });
  const showMessage = useMessage();

  useEffect(() => { // TODO proccess errors array
    showMessage(error);
    clearError();
  }, [error, showMessage, clearError]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  
  const handleRegister = async () => {
    try {
      const data = await makeRequest('/api/auth/register', 'POST', { ...form }); // must be api/auth/register
      showMessage(data.message);
    } catch (e) {}
  };

  const handleLogin = async () => {
    try {
      const data = await makeRequest('/api/auth/login', 'POST', { ...form }); // must be api/auth/login
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Authentication</span>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="input-field col">
                  <input placeholder="Your email" id="email" type="text" className="validate" name="email" onChange={handleChange} value={form.email} />
                  <label htmlFor="disabled">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col">
                  <input placeholder="Your password" id="password" type="password" className="validate" name="password" onChange={handleChange} value={form.password} />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button className="waves-effect waves-light btn mr-6" onClick={handleLogin} disabled={isLoading}>Sign in</button>
              <button className="waves-effect waves-light btn" onClick={handleRegister} disabled={isLoading}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};