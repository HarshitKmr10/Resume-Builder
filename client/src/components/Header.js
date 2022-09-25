import React from 'react'
import '../index.css';

function Header() {
  return (
    <div className='header'>
        <div className="navbar container">
            <div className="logo">Resume Builder</div>
            <ul className="nav-items">
                <div className="sign-in btn btn-secondary">sign in</div>
                <div className="getting-started-today btn btn-primary">Get started today</div>
            </ul>
        </div>

        <div className="main-content">
            <div className="main-intro">
                <h1>Build your <span>QR Code Based</span> resume from scratch</h1>
            </div>

            <div className="secondary-intro">
                <p>Most QR code based resume building software are accurate, but hard to use. We make it user-friendly and easy to use.</p>
            </div>

            <div className="btn btn-primary">Build your resume</div>
            <div className="btn btn-secondary">Browse Templates</div>
        </div>
        
    </div>
  )
}

export default Header