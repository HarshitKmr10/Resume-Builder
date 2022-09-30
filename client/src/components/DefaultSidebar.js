import React from 'react';

const DefaultSidebar = ({ src, name }) => {
  const { REACT_APP_SERVER_URL } = process.env;
  return (
    <div>
      <h4>Share this resume!</h4>
      <img src={`${REACT_APP_SERVER_URL.replace("api/", "")}qrcode/${src}`} alt={name} />
    </div>
  )
}

export default DefaultSidebar;