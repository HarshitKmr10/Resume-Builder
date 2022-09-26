import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Page from "./Page";
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Resume = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [resumeDetails, setResumeDetails] = useState();

  async function getResume() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}resume/${id}`);
      const { resume } = response.data;
      setResumeDetails(resume);
    } catch (err) {
      navigate("/404");
    }
  }

  useEffect(() => {
    getResume();
    // eslint-disable-next-line
  }, [id])

  return (
    <>
      <Header resumeId={id} resumeName={resumeDetails?.name} />
      <main className='resume'>
        <div className='drop-area'>
          <Page resumeElements={resumeDetails?.elements} />
        </div>
        <Sidebar qrCodeSrc={resumeDetails?.qrCode} resumeName={resumeDetails?.name} />
      </main>
    </>
  )
}

export default Resume