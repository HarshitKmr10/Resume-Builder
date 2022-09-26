import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import Page from './Page';

function Account() {
	const navigate = useNavigate();
	const { user } = useUser();
	const { username } = useParams();
	const [isReadOnly, setIsReadOnly] = useState(false);
	const [resumes, setResumes] = useState([]);

	useEffect(() => {
		if (user && username === user.username) getUserResumes();

		setIsReadOnly(username !== user?.username);

		// eslint-disable-next-line
	}, [username, user])

	async function getUserResumes() {
		try {
			const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}resumes/${user._id}`);
			setResumes(response.data.resumes);
		} catch (err) {
			console.log(err);
		}
	}

	async function changeVisibility(e, resumeId) {
		try {
			const data = { visibility: e.target.value };
			axios.put(`${process.env.REACT_APP_SERVER_URL}resume/visibility/${resumeId}`, data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			{
				isReadOnly ?
					<div className='account-not-found'>
						<h2>Seems like you don't have an account...</h2>
						<button onClick={() => navigate("/signup")}>Sign Up Now</button>
					</div> :
					<div className="account">
						<h1 className="main-heading">User Account</h1>
						<div className="user-info">
							<p><b>Username:</b> <span className="user-name">{user?.username}</span> </p>
							<p><b>Email:</b> <span className="user-email">{user?.email}</span> </p>
						</div>

						<h2 className="resume-heading">Resumes</h2>
						<div className="resume-list">
							{
								resumes.map(resume => {
									return (
										<div className='card' key={resume._id}>
											<div>
												<Page resumeElements={resume.elements} isReadOnly={true} />
											</div>
											<div className='content'>
												<h2 className='resume-name'>{resume.name}</h2>
												<div className='visibility'>
													<label><b>Visibility:</b></label>
													<select defaultValue={resume.visibility}
														onChange={e => changeVisibility(e, resume._id)}>
														<option value="public">Public</option>
														<option value="private">Private</option>
													</select>
												</div>
												<div className='btn-group'>
													<button className='btn'><BsTrash />&nbsp;Delete</button>
													<button className="btn"
														onClick={() => navigate(`/${resume.ownerUserName}/${resume.id}`)}>
														View Template
													</button>
												</div>
												<img className='resume-qr' src={`img/qrcodes/${resume.qrCode}`} alt={resume.name} />
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
			}
		</>
	)
}

export default Account