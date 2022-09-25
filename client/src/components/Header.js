import React from 'react';
import { FiType } from "react-icons/fi";
import { BiRectangle } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import ReactDOM from 'react-dom/client';
import TextElement from './TextElement';
import { createNewElement } from '../utils/helper';

const Header = () => {

  function addText() {
    let activePage = document.querySelector(".page.active");
    if (!activePage) activePage = document.querySelector(".page");

    const element = createNewElement(activePage);
    ReactDOM.createRoot(element).render(<TextElement />);
    activePage.appendChild(element);
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
