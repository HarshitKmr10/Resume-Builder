import React from 'react'

const Signup = () => {
  return (
    <>
        <div className="main">
        <div className="logo"></div>
        <div className="card">
        <div className="title"><h1>Resume Builder</h1></div>
        <div className="credentials">  
            <form>
            <div className="username">
                
                <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="E-mail">
                
                <input type="email" name="E-mail" placeholder="E-mail" required />
            </div>
            <div className="password">
                
                <input type="password" password name = "password" placeholder="Password" required />
            </div>
            </form>
            <div className="Work_Experience">
                <h2>Work Experience</h2>
            </div>
            <div className="company_1">
                <h4>Experience One</h4>
            </div>
            <form>
                <div className="Designation">
                
                    <input type="text" name="Designation" placeholder="Designation" required />
                </div>    
            <div className="Company">
                
                <input type="text" name="Company" placeholder="Company" required />
            </div>
            <div className="DateofJoining">
                
                <input type="date" name="Date_of_Joining" placeholder="Date_of_Joining" required />
            </div>
            <div className="Description">
                
                <input type="text" name="Description" placeholder="Description" required />
            </div>
            </form>
            <div className="company_2">
                <h4>Experience Two</h4>
            </div>
            <form>
            <div className="Designation">
                
                    <input type="text" name="Designation" placeholder="Designation" required />
                </div>    
            <div className="Company">
                
                <input type="text" name="Company" placeholder="Company" required />
            </div>
            <div className="DateofJoining">
                
                <input type="date" name="Date_of_Joining" placeholder="Date_of_Joining" required />
            </div>
            <div className="Description">
                
                <input type="text" name="Description" placeholder="Description" required />
            </div>
            
            </form>
            <div className="Education">
                <h2>Education</h2>
            </div>
            <form>
            <div className="Institute_Name">
                
                <input type="text" name="Institute_Name" placeholder="Institute_Name" required />
            </div>
            <div className="Degree">
                
                <input type="text" name="Degree" placeholder="Degree" required />
            </div>
            <div className="CGPA">
                
                <input type="number" name="CGPA" placeholder="CGPA" required />
            </div>
            <div className="Date_of_Passout">
                
                <input type="date" name="Date_of_Passout" placeholder="Date of Passout" required />
            </div>
            </form>
            <div className="Projects">
                <h2>Projects</h2>
            </div>
            <div className="project_one">
                <h4>Project One</h4>
            </div>
            <form>
        
            <div className="Project_Name">
                
                <input type="text" name="Project_Name" placeholder="Project Name" required />
            </div>
            <div className="Description_Project">
                
                <input type="text" name="Description_Project" placeholder="Project Detail" required />
            </div>
            </form>
            <div className="project_two">
                <h4>Project Two</h4> 
            </div>
            <form>
            <div className="Project_Name">
                
                <input type="text" name="Project_Name" placeholder="Project Name" required />
            </div>
            <div className="Description_Project">
                
                <input type="text" name="Description_Project" placeholder="Project Detail" required />
            </div>
            </form>
            <div className="Skills">
                <h2>Skills</h2>
            </div>
            <form>
            <div className="Skills">
                <input type="text" name="Skills" placeholder="Skills" required />
            </div>
            </form>
        </div>   
        <button className="submit">Submit</button>
        <div className="link">
            <a href = "#">Sign In</a> 
            
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup