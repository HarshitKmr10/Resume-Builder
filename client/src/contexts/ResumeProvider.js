import React, { useState, useContext, createContext } from 'react'

const ResumeContext = createContext();

export function useResume() {
  return useContext(ResumeContext);
}

const ResumeProvider = ({ children }) => {
  const [activeElementId, setActiveElementId] = useState(null);

  function setActive(elementId) {
    document.querySelectorAll(".element.active").forEach(element => element.classList.remove("active"));
    document.getElementById(elementId).classList.add("active");
    setActiveElementId(elementId);
  }
  
  return (
    <ResumeContext.Provider value={{ activeElementId, setActiveElementId, setActive }}>
      {children}
    </ResumeContext.Provider>
  )
}

export default ResumeProvider