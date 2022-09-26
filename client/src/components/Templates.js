import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Page from './Page'

const Templates = () => {

  const [templates, setTemplates] = useState([]);

  const getAllTemplates = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}templates`);
      setTemplates(response.data.resumes)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllTemplates();
  }, [])

  return (
    <div className='template'>
      <div className='main'>
        <div className='heading'>
          <h1>Browse Templates</h1>
        </div>
        <div className='sub-heading'>
          <h5>Click on a template to view it's details.</h5>
        </div>
        {/* cards starts from here  */}
        <div className='container'>
          {
            templates.map((template) => {
              return (
                <div className='card' key={template._id}>
                  <div>
                    <Page resumeElements={template.elements} isTemplate={true} />
                  </div>
                  <div className='content'>
                    <h3 className='template-name'>{template.name}</h3>
                    <p><b>Rating:</b> {template.rating} / 5</p>
                    <button className="btn">View Template</button>
                    <img className='template-qr' src={`/img/qrcodes/${template.qrCode}`} alt={template.name} />
                  </div>
                </div>
                // <div className="card" key={template._id}>
                //   <div className="box">
                //     <div className="content">
                //       <div>
                //         <Page resumeElements={template.elements} />
                //       </div>
                //       <div className='details'>
                //         {/* <h2></h2> */}
                //         <h3>{template.name}</h3>
                //         <p>Ratings: {template.rating}</p>
                //         <button className="btn">View Template</button>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Templates