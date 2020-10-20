import React, { useState } from 'react';

export default () => {
  const [form, useForm] = useState({ email: '', password: '' });

  

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
                <div className="input-field col s4">
                  <input placeholder="Your email" id="email" type="text" className="validate" />
                  <label for="disabled">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4">
                  <input placeholder="Your password" id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
            </div>
            <div className="card-action">
                  <a className="waves-effect waves-light btn mr-6">Sign in</a>
                  <a className="waves-effect waves-light btn">Register</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};