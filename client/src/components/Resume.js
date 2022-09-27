import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Page from "./Page";
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useResume } from '../contexts/ResumeProvider';
import { useUser } from '../contexts/UserProvider';
import { jsPDF } from "jspdf";

const Resume = () => {

  const { username, id } = useParams();
  const navigate = useNavigate();
  const { setActiveElementId } = useResume();
  const { user } = useUser();
  const [resumeDetails, setResumeDetails] = useState();
  const [isReadOnly, setIsReadOnly] = useState(false);

  useEffect(() => {
    getResume();
    setIsReadOnly(username !== user?.username);
    // eslint-disable-next-line
  }, [user, username, id])

  async function getResume() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}resume/${id}`);
      const { resume } = response.data;
      setResumeDetails(resume);
    } catch (err) {
      navigate("/404");
    }
  }

  function handleClick(e) {
    if (e.target !== e.currentTarget) return;

    document.querySelectorAll(".element.active").forEach(element => element.classList.remove("active"));
    setActiveElementId(null);
  }

  async function downloadPdf() {
    const page = await document.querySelector(".page");
    const {height, width} = page.getBoundingClientRect();
    const pdf = new jsPDF("portrait", "px", [width, height]);
    pdf.html(page).then(() => {
      pdf.save(`${resumeDetails?.name}.pdf`);
    });
  }

  return (
    <>
      <Header resumeId={id} resumeName={resumeDetails?.name} isReadOnly={isReadOnly}
        resumeElements={resumeDetails?.elements} download={downloadPdf} />
      <main className='resume'>
        <div className='drop-area' onClick={handleClick}>
          <Page resumeElements={resumeDetails?.elements} isReadOnly={isReadOnly} />
        </div>
        <Sidebar qrCodeSrc={resumeDetails?.qrCode} resumeName={resumeDetails?.name} />
      </main>
    </>
  )
}

export default Resume