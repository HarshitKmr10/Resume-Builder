import React from 'react'
import { useNavigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"

function Landing() {
	const navigate = useNavigate();
	const { user } = useUser();

	return (
		<div className='header'>
			<div className="navbar container">
				<div className="logo">Resume Builder</div>
				<ul className="nav-items">
					{
						user ? <h3 style={{ cursor: "pointer" }}
							onClick={() => navigate(`/${user.username}`)}>{user.username}</h3> :
							<>
								<div className="sign-in btn btn-secondary" onClick={() => navigate("/login")}>Log in</div>
								<div className="getting-started-today btn btn-primary" onClick={() => navigate("/signup")}>
									Get started today
								</div>
							</>
					}
				</ul>
			</div>

			<div className="main-content" id = "slide">
				<div className="main-intro">
					<h1>Build your <span>QR Code Based</span> resume from scratch</h1>
				</div>

				<div className="secondary-intro">
					<p>Most QR code based resume building software are accurate, but hard to use. We make it user-friendly and easy to use.</p>
				</div>

				<div className="btn btn-primary" onClick={() => navigate("/chaitanyagiri/633187b807ef40871f00762a")}>Build your resume</div>
				<div className="btn btn-secondary" onClick={() => navigate("/templates")}>Browse Templates</div>
			</div>

		</div>
	)
}

export default Landing