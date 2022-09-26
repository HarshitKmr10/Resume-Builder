import React from 'react';

const DefaultSidebar = ({ src, name }) => {
  return (
    <div>
      <h4>Share you resume via this QR Code</h4>
      <img src={`/img/qrcodes/${src}`} alt={name} />
    </div>
  )
}

export default DefaultSidebar;