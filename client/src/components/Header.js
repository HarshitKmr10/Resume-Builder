import React, { useRef } from 'react';
import { FiType } from "react-icons/fi";
import { BiRectangle } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import ReactDOM from 'react-dom/client';
import TextElement from './TextElement';
import { createNewElement } from '../utils/helper';
import { useResume } from '../contexts/ResumeProvider';
import ImageElement from './ImageElement';

const Header = () => {

  const imageInputRef = useRef();
  const { setActive } = useResume();

  function addText() {
    let activePage = document.querySelector(".page.active");
    if (!activePage) activePage = document.querySelector(".page");

    const element = createNewElement(activePage, "text", setActive);
    ReactDOM.createRoot(element).render(<TextElement />);
    activePage.appendChild(element);
    setActive(element.id);
  }

  function openFileExplorer() {
    imageInputRef.current.click();
  }

  function addImage(e) {
    if (e.target.files.length === 0) return;

    let activePage = document.querySelector(".page.active");
    if (!activePage) activePage = document.querySelector(".page");

    const element = createNewElement(activePage, "image", setActive);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const src = e.target.result;
      ReactDOM.createRoot(element).render(<ImageElement src={src} />);
      activePage.appendChild(element);
      setActive(element.id);
    }
    reader.readAsDataURL(file);
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
        <div onClick={openFileExplorer}>
          <BsImage />
          <input ref={imageInputRef} type={"file"}
            accept="image/*"
            multiple={false}
            onChange={addImage}
            style={{ display: "none" }} />
        </div>
      </div>
      <button>Save Changes</button>
    </header>
  )
}

export default Header
