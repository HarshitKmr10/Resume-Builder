import React from 'react';
import ResumeProvider from '../contexts/ResumeProvider';
import Header from "./Header";
import Page from "./Page";
import Sidebar from "./Sidebar";

const Resume = () => {
  return (
    <ResumeProvider>
      <Header />
      <main className='resume'>
        <div className='drop-area'>
          <Page />
        </div>
        <Sidebar />
      </main>
    </ResumeProvider>
  )
}

export default Resume