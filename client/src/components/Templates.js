import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Page from './Page'
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';

const Templates = () => {

  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();
  const { REACT_APP_SERVER_URL } = process.env;

  const getAllTemplates = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}templates`);
      setTemplates(response.data.resumes)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllTemplates();
    // eslint-disable-next-line
  }, [])

  return (
    <div className='template'>
      <div className='main'>
        <button className='btn back-btn' onClick={() => navigate(-1)}><BiArrowBack /> Go Back</button>
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
                    <Page resumeElements={template.elements} isReadOnly={true} />
                  </div>
                  <div className='content'>
                    <h3 className='template-name'>{template.name}</h3>
                    <p><b>Owner:</b> {template.ownerUserName}</p>
                    <button className="btn"
                      onClick={() => navigate(`/${template.ownerUserName}/${template._id}`)}>
                      View Template
                    </button>
                    <img className='template-qr' src={`${REACT_APP_SERVER_URL.replace("api/", "")}qrcode/${template.qrCode}`} alt={template.name} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Templates