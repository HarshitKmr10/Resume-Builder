import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", workExperince:"", education:"", projects:"", skills:""})

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password, workExperince, education, projects, skills} = credentials;
        const response = await fetch("http://localhost:3030/api/user", {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password, workExperince, education, projects, skills})
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            //saving the auth token into the localstorage
            localStorage.setItem('token', json.authtoken);

            //redirects towards home route
            navigate("/")
        }else{
            alert("Already Registered")
        }
    }
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className="main signup">
        <div className="logo"></div>

        <div className="title">
            <h1>Resume Builder</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="credentials">
                <div className="credentials_left">

                    <div className="E-mail">

                        <input type="email" name="E-mail" placeholder="E-mail" required  onChange={onChange}/>
                    </div>
                    <div className="password">

                        <input type="password" password name="password" placeholder="Password" required  onChange={onChange}/>
                    </div>

                    <div className="Education">
                        <h2>Education</h2>
                    </div>

                    <div className="Institute_Name">

                        <input type="text" name="Institute_Name" placeholder="Institute_Name" required  onChange={onChange}/>
                    </div>
                    <div className="Degree">

                        <input type="text" name="Degree" placeholder="Degree" required  onChange={onChange}/>
                    </div>
                    <div className="CGPA">

                        <input type="number" name="CGPA" placeholder="CGPA" required onChange={onChange} />
                    </div>
                    <div className="Date_of_Passout">

                        <input type="date" name="Date_of_Passout" placeholder="Date of Passout" required  onChange={onChange}/>
                    </div>

                    <div className="Projects">
                        <h2>Projects</h2>
                    </div>
                    <div className="project_one">
                        <h4>Project One</h4>
                    </div>


                    <div className="Project_Name">

                        <input type="text" name="Project_Name" placeholder="Project Name" required  onChange={onChange}/>
                    </div>
                    <div className="Description_Project">

                        <input type="text" name="Description_Project" placeholder="Project Detail" required  onChange={onChange}/>
                    </div>

                    <div className="project_two">
                        <h4>Project Two</h4>
                    </div>

                    <div className="Project_Name">

                        <input type="text" name="Project_Name" placeholder="Project Name" required  onChange={onChange}/>
                    </div>
                    <div className="Description_Project">

                        <input type="text" name="Description_Project" placeholder="Project Detail" required  onChange={onChange}/>
                    </div>

                </div>
                <div className="credentials_right">
                    <div className="Work_Experience">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="Experience_1">
                        <h4>Experience One</h4>
                    </div>

                    <div className="Designation">

                        <input type="text" name="Designation" placeholder="Designation" required  onChange={onChange}/>
                    </div>
                    <div className="Company">

                        <input type="text" name="Company" placeholder="Company" required  onChange={onChange}/>
                    </div>
                    <div className="DateofJoining">

                        <input type="date" name="Date_of_Joining" placeholder="Date_of_Joining" required  onChange={onChange}/>
                    </div>
                    <div className="Description">

                        <input type="text" name="Description" placeholder="Description" required  onChange={onChange}/>
                    </div>

                    <div className="company_2">
                        <h4>Experience Two</h4>
                    </div>

                    <div className="Designation">

                        <input type="text" name="Designation" placeholder="Designation" required  onChange={onChange}/>
                    </div>
                    <div className="Company">

                        <input type="text" name="Company" placeholder="Company" required  onChange={onChange}/>
                    </div>
                    <div className="DateofJoining">
                        <input type="date" name="Date_of_Joining" placeholder="Date of Joining" required  onChange={onChange}/>
                    </div>
                    <div className="Description">
                        <input type="text" name="Description" placeholder="Description" required  onChange={onChange}/>
                    </div>
                    <div className="Skills">
                        <h2>Skills</h2>
                    </div>
    
                    <div className="Skills_form">
    
                        <input type="text" name="Skills" placeholder="Skills" required  onChange={onChange}/>
                    </div>
                </div>
            </div>
            <button className="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup