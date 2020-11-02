import React from 'react';
import { Link } from 'react-router-dom';

export default ({ links }) => {
  return (
    <table>
      <thead>
        <tr>
            <th>№</th>
            <th>Short</th>
            <th>Full</th>
            <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.to}</td>
              <td>{link.from}</td>
              <td><Link to={`/details/${link._id}`}>Details</Link></td>
            </tr>
          )
        })}
        
      </tbody>
    </table>
  )
};