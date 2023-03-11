import React from 'react'
import { useNavigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Landing() {
	const navigate = useNavigate();
	const { user, setUser } = useUser();
	const [success, setSuccess] = useState(true)

	function signOut() {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		setUser(null);
	}

	function handleClose() {
		setSuccess(false)
	}

	return (
		<main className='landing-container'>
			<nav className="header">
				<div className="logo">Resume Builder</div>
				<ul className="nav-items">
					{
						user ?
							<>
								<button className='btn'
									onClick={() => navigate(`/${user.username}`)}>{user.username}</button>
								<button className='btn btn-primary' onClick={signOut}>Sign out</button>
							</> :
							<>
								<button className="sign-in btn btn-secondary" onClick={() => navigate("/login")}>Log in</button>
								<button className="getting-started-today btn btn-primary" onClick={() => navigate("/signup")}>
									Get started today
								</button>
							</>
					}
				</ul>
			</nav>
			{
				user && success && (
					<Alert variant='success'>
						Successfully LoggedIn!
						<button style={{ float: 'right' }} type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={handleClose}></button>
					</Alert>
				)
			}
			<div className="main-content" id="slide">
				<div className="main-intro">
					<h1>Build your <span>QR Code Based</span> resume from scratch</h1>
				</div>

				<div className="secondary-intro">
					<p>Most QR code based resume building software are accurate, but hard to use. We make it user-friendly and easy to use.</p>
				</div>

				<button className="btn btn-primary" onClick={() => navigate("/chaitanyagiri/633187b807ef40871f00762a")}
					style={{ marginRight: "1.5rem" }}
				>Build your resume</button>
				<button className="btn btn-secondary" onClick={() => navigate("/templates")}>Browse Templates</button>
			</div>
			<img src="/img/wave.svg" alt="wave" className='wave' />
		</main>
	)
}

export default Landing