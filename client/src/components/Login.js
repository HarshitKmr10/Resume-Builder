import React from 'react';
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className='login'>
			<div className="main">
				<div className="logo"></div>
				<div className="card">
					<div className="title"> Resume Builder</div>
					<form>
						<div className="credentials">
							<div className="username">
								<span className="glyphicon glyphicon-user"></span>
								<input type="text" name="username" placeholder="Username" required />
							</div>
							<div className="password">
								<span className="glyphicon glyphicon-lock"></span>
								<input type="password" name="password" placeholder="Password" required />
							</div>
						</div>
						<button className="submit">Submit</button>
					</form>
					<div className="link">
						<Link to={"/signup"}>Forgot Password?</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to={"/signup"}>Sign Up</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
