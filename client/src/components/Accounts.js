import React from 'react'
import { useNavigate } from 'react-router-dom';
function Accounts() {
    const navigate = useNavigate();
    return (
        <div className="accounts">
            <h1 className="main-heading">User Account</h1>
            <div className="user-info">
                <p>Name: <span className="user-name">Archit</span> </p>
                <p>Email: <span className="user-email">architjain669@gmail.com</span> </p>
                <p>Phone: <span className="phone">9643634298</span> </p>
            </div>

            <h2 className="resume-heading">Resumes</h2>
            <div className="resume-list">
                <p><h2>My Resume 1</h2>
                <div className="delete-resume-btn">Delete</div></p>
                <p><h2>My Resume 2</h2>
                <div className="delete-resume-btn">Delete</div></p>
                <p><h2>My Resume 3</h2>
                <div className="delete-resume-btn">Delete</div></p>
                <p><h2>My Resume 4</h2>
                <div className="delete-resume-btn">Delete</div></p>
            </div>

        </div>
    )
}

export default Accounts
