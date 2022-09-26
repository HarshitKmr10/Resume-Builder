import React from 'react';
import { Link } from "react-router-dom";

function Login(props) {
    const [credentials, setCredentials] = useState({email:"", password:""});

	const handleSubmit = async (e) =>{
		e.preventDefault();
		const response = await fetch("http://localhost:3030/api/auth", {
			method: 'POST',
			headers:{
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email: credentials.email, password: credentials.password})
		});
		const json = await response.json()
		console.log(json);
	}
	const onChange = (e) =>{
		setCredentials({...credentials, [e.target.name]: e.target.value})
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
								<input type="email" name="email" placeholder="Email" id="email" required  value={credentials.email} onChange={onChange}/>
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
