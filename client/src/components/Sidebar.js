import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from "react-dom/client"
import { useResume } from '../contexts/ResumeProvider'
import TextSidebar from "./TextSidebar"

const Sidebar = () => {

  const { activeElementId, setActiveElementId } = useResume();
  const sidebarRef = useRef();
  const [sidebarRoot, setSidebarRoot] = useState();

  useEffect(() => {
    if (!sidebarRoot) {
      setSidebarRoot(ReactDOM.createRoot(sidebarRef.current));
      return;
    }

    if (!activeElementId) {
      sidebarRoot.render("Add or Click on an element to edit it's style");
      return; 
    }
    
    const type = document.getElementById(activeElementId).getAttribute("element-type");
    switch (type) {
      case "text":
        sidebarRoot.render(<TextSidebar activeElementId={activeElementId} 
          setActiveElementId={setActiveElementId} />);
        break;
      default:
        break;
    }
  }, [sidebarRoot, activeElementId, setActiveElementId])

  return (
    <div id='sidebar' className='sidebar' ref={sidebarRef}></div>
  )
}

export default Sidebar