import React, { useEffect, useRef } from 'react';
import { FiType } from "react-icons/fi";
import { BiRectangle } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import ReactDOM from 'react-dom/client';
import TextElement from './TextElement';
import { createNewElement } from '../utils/helper';
import { useResume } from '../contexts/ResumeProvider';
import ImageElement from './ImageElement';
import ShapeElement from './ShapeElement';
import axios from 'axios';

const Header = ({ resumeId, resumeName, isReadOnly }) => {

  const resumeNameRef = useRef();
  const imageInputRef = useRef();
  const { setActive } = useResume();

  useEffect(() => {
    if (isReadOnly) return;

    resumeNameRef.current.value = resumeName;
  }, [resumeName, isReadOnly])

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

    const extension = file.name.split('.').pop();

    reader.onload = async function (e) {
      const src = e.target.result;
      ReactDOM.createRoot(element).render(<ImageElement src={src} />);
      element.setAttribute("image-src", `/img/uploads/${element.id}.${extension}`);
      activePage.appendChild(element);
      setActive(element.id);
    }
    reader.readAsDataURL(file);
    imageInputRef.current.nextSibling.value = element.id;
    document.getElementById('image-form').submit();
  }

  function addShape() {
    let activePage = document.querySelector(".page.active");
    if (!activePage) activePage = document.querySelector(".page");

    const element = createNewElement(activePage, "shape", setActive);
    ReactDOM.createRoot(element).render(<ShapeElement />);
    activePage.appendChild(element);
    setActive(element.id);
  }

  function saveChanges() {
    const elements = document.querySelectorAll(".element");
    const elementsData = [];

    elements.forEach(element => {
      const id = element.id;
      // const { top,  }
      let allowed = ["top", "left", "height", "width", "backgroundColor", "borderRadius",
        "color", "fontSize", "fontWeight", "fontStyle", "textDecoration"];
      const style = Object.keys(element.style)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = element.style[key];
          return obj;
        }, {});
      const elementType = element.getAttribute("element-type");
      const src = elementType === "image" ? element.getAttribute("image-src") : "";
      const text = elementType === "text" ? element.textContent : "";
      elementsData.push({ id, style, elementType, src, text });
    })
    console.log(elementsData);
    saveResume(elementsData);
  }

  async function saveResume(elements) {
    const name = resumeNameRef.current.value;
    const data = { name, ownerId: "123", ownerUserName: "Chaitanya", elements };
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}resume/${resumeId}`, data);
      alert("Resumed Saved Successfully!");
    } catch (error) {
      console.log("Error in saving resume");
    }
  }

  return (
    <header>
      <div className='element-btn-group'>
        {
          !isReadOnly &&
          <>
            <div onClick={addText}>
              <FiType />
            </div>
            <div onClick={addShape}>
              <BiRectangle />
            </div>
            <div onClick={openFileExplorer}>
              <BsImage />
              <form id='image-form' action={`${process.env.REACT_APP_SERVER_URL}upload`}
                method='POST' encType='multipart/form-data'
                onSubmit={e => e.preventDefault()}>
                <input ref={imageInputRef}
                  name="image"
                  type={"file"}
                  accept="image/*"
                  multiple={false}
                  onChange={addImage}
                  style={{ display: "none" }} />
                <input name="elementid" style={{ display: "none" }} />
              </form>
            </div>
          </>
        }
      </div>
      <div>
        {
          !isReadOnly &&
          <>
            <input ref={resumeNameRef} defaultValue={resumeName || 'Untitled'} />
            <button onClick={saveChanges}>Save Changes</button>
          </>
        }
      </div>
    </header>
  )
}

export default Header
