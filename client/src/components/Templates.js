import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Templates = () => {

    const [templates, setTemplates] = useState([]);

    const getAllData  = async () =>{
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}resume/templates`);
          setTemplates(response.data.resumes)
    }

    useEffect(()=>{
     getAllData();
    }, [])

    return (
 <div className='template'>
 <div className='main'> 
    <div className='heading'>
        <h1>This my templates heading</h1>
    </div>
    <div className='sub-heading'>
        <h5>There are several other templates to look out.</h5>
    </div>

{/* cards starts from here  */}
{/* <div className="container"> */}

{
  templates.map((template)=>{
    return (
        <div className="card" key={template._id}>
        <div className="box">
          <div className="content">
            <h2></h2>
            <h3>{template.name}</h3>
            <p>Ratings: {template.rating}</p>
            <button className="btn">View Template</button>
          </div>
        </div>
      </div>
    
    )
  })    
}

  {/* <div className="card">
    <div className="box">
      <div className="content">
        <h2>02</h2>
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div> */}
{/* 
  <div className="card">
    <div className="box">
      <div className="content">
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div> */}
</div> 
        </div>
   
)}

export default Templates