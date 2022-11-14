import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useUser } from "../contexts/UserProvider";
import { BiArrowBack } from "react-icons/bi";

function Login() {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const navigate = useNavigate();
	const { setUser } = useUser();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(process.env.REACT_APP_SERVER_URL + "auth", credentials)
			const { success, token, user } = response.data;

			if (!success) return alert("Invalid credentials!");

			localStorage.setItem('token', token);
			localStorage.setItem('user', JSON.stringify(user));
			setUser(user);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	}

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	return (
		<main className='login'>
			<div className='header'>
				<button className='btn back-btn' onClick={() => navigate(-1)}><BiArrowBack />Go Back</button>
			</div>
			<div className='form-container'>
				<form onSubmit={handleSubmit}>
					<h3>Log In</h3>
					<div className='form-group'>
						<label htmlFor="email">Email</label>
						<input id="email" name="email" placeholder='Email' value={credentials.email} onChange={handleChange} />
					</div>
					<div className='form-group'>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="password" placeholder='Password'
							value={credentials.password} onChange={handleChange} />
					</div>
					<button type="submit" className='btn btn-primary'>Login</button>
					<Link to='/signup' className='signup-link'>Don't have an account?&nbsp;&nbsp;<span>Sign Up</span></Link>
				</form>
				<img src="/img/login.png" alt='login' />
			</div>
			<img src="/img/wave.svg" alt="wave" className='wave' />
		</main>
	)
}

export default Login
