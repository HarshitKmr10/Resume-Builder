import React from 'react';
import { FiType } from "react-icons/fi";
import { BiRectangle } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import ReactDOM from 'react-dom/client';
import TextElement from './TextElement';
import { createNewElement } from '../utils/helper';
import { useResume } from '../contexts/ResumeProvider';

const Header = () => {

  const { setActive } = useResume();

  function addText() {
    let activePage = document.querySelector(".page.active");
    if (!activePage) activePage = document.querySelector(".page");

    const element = createNewElement(activePage, "text", setActive);
    ReactDOM.createRoot(element).render(<TextElement />);
    activePage.appendChild(element);
    setActive(element.id);
  }

  return (
    <header>
      <div className='element-btn-group'>
        <div onClick={addText}>
          <FiType />
        </div>
        <div>
          <BiRectangle />
        </div>
        <div>
          <BsImage />
        </div>
      </div>
      <button>Save Changes</button>
    </header>
  )
}

export default Header
