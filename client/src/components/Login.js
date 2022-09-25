import React from 'react'

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
						<a href="#">Forget Password</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Sign Up</a>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
