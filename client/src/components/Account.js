import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import Page from './Page'
import { IoReloadOutline } from "react-icons/io5";
import { BiArrowBack } from 'react-icons/bi';

function Account() {
	const navigate = useNavigate();
	const { user } = useUser();
	const { username } = useParams();
	const [isReadOnly, setIsReadOnly] = useState(false);
	const [resumes, setResumes] = useState([]);

	const { REACT_APP_SERVER_URL } = process.env;

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

	async function deleteResume(e, resumeId) {
		const canDelete = window.confirm("Are you sure you want to delete this resume?");
		if (!canDelete) return;
		try {
			axios.delete(`${process.env.REACT_APP_SERVER_URL}resume/${resumeId}`);
			document.getElementById(`card-${resumeId}`).remove();
		} catch (err) {
			console.log(err);
		}
	}

	async function createNewResume() {
		try {
			const data = { name: "Untitled", ownerId: user._id, ownerUserName: user.username };
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}resume/-1`, data);
			const { resume } = response.data;
			navigate(`/${user.username}/${resume._id}`);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<main className='account-container'>
			<button className='btn back-btn' onClick={() => navigate(-1)}><BiArrowBack />Go Back</button>
			{
				isReadOnly ?
					<div className='account-not-found'>
						<h2>Seems like you don't have an account...</h2>
						<button className='btn btn-primary' onClick={() => navigate("/signup")}>Sign Up Now</button>
						<br />
						<h3>Or Try</h3>
						<button className='btn' onClick={() => navigate(0)}><IoReloadOutline />Reloading</button>
					</div>
					:
					<div className='account-details'>
						<div className="account">
							<h1 className="main-heading">User Account</h1>
							<div className="user-info">
								<p><b>Username:</b> <span className="user-name">{user?.username}</span> </p>
								<p><b>Email:</b> <span className="user-email">{user?.email}</span> </p>
							</div>

							<div className='resume-section-header'>
								<h2 className="resume-heading">Resumes</h2>
								<button className='btn' onClick={createNewResume}>Create New</button>
							</div>
						</div>
						<div className="resume-list">
							{
								resumes.map(resume => {
									return (
										<div id={`card-${resume._id}`} className='card' key={resume._id}>
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
													<button className='btn' onClick={e => deleteResume(e, resume._id)}>
														<BsTrash />&nbsp;Delete
													</button>
													<button className="btn"
														onClick={() => navigate(`/${resume.ownerUserName}/${resume._id}`)}>
														View Template
													</button>
												</div>
												<img className='resume-qr'
													src={`${REACT_APP_SERVER_URL.replace("api/", "")}qrcode/${resume.qrCode}`}
													alt={resume.name} />
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
			}
		</main>
	)
}

export default Account