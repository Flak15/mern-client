import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export default () => {
  const auth = useContext(AuthContext);
  const [link, setLink] = useState('');
  const { makeRequest } = useHttp();
  const history = useHistory();

  const handleChange = (event) => {
    setLink(event.target.value);
  };
  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const res = await makeRequest('/api/link/generate', 'POST', { from: link }, { Authorization: `Bearer ${auth.token}`});
      history.push(`/details/${res.link._id}`);
      
    } catch (e) {
      const errMessage = JSON.parse(e.message);
      console.log(errMessage.name);
      // if (errMessage.name === 'TokenExpiredError') {
      //   return auth.logout();
      // }
    }
    setLink('');
  };
  return (
    <div className="row">
        <div className="col s6 offset-s3">
        <div className="input-field col">
          <input 
            placeholder="Enter url" 
            id="link" 
            type="text" 
            className="validate" 
            name="link" 
            onChange={handleChange} value={link} 
          />
          {/* <label className="active" htmlFor="link">Link</label> */}
          <button 
            className="waves-effect waves-light red lighten-2 btn mr-6" 
            onClick={handleCreate} 
          >Create link</button>
        </div>
      </div>
    </div>

  )
};