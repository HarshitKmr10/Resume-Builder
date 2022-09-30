import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useUser } from "../contexts/UserProvider";

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

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	return (
		<div className='login'>
			<div className="main">
				<div className="logo"></div>
				<div className="card">
					<div className="title"> Resume Builder</div>
					<form onSubmit={handleSubmit}>
						<div className="credentials">
							<div className="username">
								<span className="glyphicon glyphicon-user"></span>
								<input type="email" name="email" placeholder="Email" id="email" required value={credentials.email} onChange={onChange} />
							</div>
							<div className="password">
								<span className="glyphicon glyphicon-lock"></span>
								<input type="password" name="password" placeholder="Password" required value={credentials.password} onChange={onChange} />
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
