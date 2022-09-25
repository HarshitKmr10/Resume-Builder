import React from 'react';
import Header from "./Header";
import Page from "./Page";
import Sidebar from "./Sidebar";

const Resume = () => {
  return (
    <>
      <Header />
      <main className='resume'>
        <div className='drop-area'>
          <Page />
        </div>
        <Sidebar />
      </main>
    </>
  )
}

export default Resume