import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';

export default () => {
  const { isLoading, error, makeRequest } = useHttp();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  
  const handleRegister = async () => {
    try {
      const data = await makeRequest('/api/register', 'POST', { ...form }); // must be api/auth/register
      console.log(data)
    } catch (e) {}
  };

  return (
    <div>
      <div className="row">
        <div className="col s6">
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
              <a className="waves-effect waves-light btn mr-6" disabled={isLoading}>Sign in</a>
              <a className="waves-effect waves-light btn" onClick={handleRegister} disabled={isLoading}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};