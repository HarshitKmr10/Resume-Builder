import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Signup = () => {
	const [credentials, setCredentials] = useState({ username: "", email: "", password: "", workExperience: "", education: "", projects: "", skills: "" })

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}user`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...credentials, workExperience: {}, education: {}, projects: {}, skills: [] })
		});
		const json = await response.json();

		console.log(json);

		if (json.success) {
			const { token, user } = json;
			//saving the auth token into the localstorage
			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(user));

			//redirects towards home route
			navigate(`/${user.username}`);
		} else {
			alert("Already Registered")
		}
	}

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	return (
		<main className='signup'>
			<div className='header'>
				<button className='btn back-btn' onClick={() => navigate(-1)}><BiArrowBack />Go Back</button>
			</div>
			<div className='form-container'>
				<img src="/img/signup.webp" alt="signup" />
				<form onSubmit={handleSubmit}>
					<h3>Sign Up</h3>
					<div className='form-group'>
						<label htmlFor="username">Username</label>
						<input id="username" name="username" placeholder='Username' value={credentials.username} onChange={handleChange} />
					</div>
					<div className='form-group'>
						<label htmlFor="email">Email</label>
						<input id="email" name="email" placeholder='Email' value={credentials.email} onChange={handleChange} />
					</div>
					<div className='form-group'>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" placeholder='Password'
							value={credentials.password} onChange={handleChange} />
					</div>
					<button type="submit" className='btn btn-primary'>Signup</button>
					<Link to='/login' className='login-link'>Already have an account?&nbsp;&nbsp;<span>Login</span></Link>
				</form>
			</div>

			<img src="/img/wave.svg" alt="wave" className='wave' />
		</main>
	)
}

export default Signup