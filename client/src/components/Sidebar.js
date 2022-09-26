import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from "react-dom/client"
import { useResume } from '../contexts/ResumeProvider'
import ImageSidebar from './ImageSidebar'
import ShapeSidebar from './ShapeSidebar'
import TextSidebar from "./TextSidebar"
import DefaultSidebar from "./DefaultSidebar"

const Sidebar = ({ qrCodeSrc, resumeName }) => {

  const { activeElementId, setActiveElementId } = useResume();
  const sidebarRef = useRef();
  const [sidebarRoot, setSidebarRoot] = useState();

  useEffect(() => {
    if (!sidebarRoot) {
      setSidebarRoot(ReactDOM.createRoot(sidebarRef.current));
      return;
    }

    if (!activeElementId) {
      sidebarRoot.render(<DefaultSidebar src={qrCodeSrc} name={resumeName} />);
      return;
    }

    const type = document.getElementById(activeElementId).getAttribute("element-type");
    switch (type) {
      case "text":
        sidebarRoot.render(<TextSidebar activeElementId={activeElementId}
          setActiveElementId={setActiveElementId} />);
        break;
      case "image":
        sidebarRoot.render(<ImageSidebar activeElementId={activeElementId}
          setActiveElementId={setActiveElementId} />);
        break;
      case "shape":
        sidebarRoot.render(<ShapeSidebar activeElementId={activeElementId}
          setActiveElementId={setActiveElementId} />);
        break;
      default:
        sidebarRoot.render(<DefaultSidebar src={qrCodeSrc} name={resumeName} />);
        break;
    }
  }, [sidebarRoot, activeElementId, setActiveElementId, qrCodeSrc, resumeName])

  return (
    <div id='sidebar' className='sidebar' ref={sidebarRef}></div>
  )
}

export default Sidebar