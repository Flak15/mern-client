import React from 'react';

export default ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>Link to: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Link from: <a href="link.from" target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Clicks: <strong>{link.clicks}</strong></p>
      <p>Creation date: <strong>{link.date}</strong></p>
    </>
  )
};