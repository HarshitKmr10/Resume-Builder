import React from 'react';
import { BsTrash } from "react-icons/bs"

const ImageSidebar = ({ activeElementId, setActiveElementId }) => {
  const styles = document.getElementById(activeElementId).style;
  const imageStyles = document.getElementById(activeElementId).querySelector("img").style;

  function changeHeight(e) {
    styles["height"] = e.target.value + "px";
    imageStyles["height"] = e.target.value + "px";
  }

  function changeWidth(e) {
    styles["width"] = e.target.value + "px";
    imageStyles["width"] = e.target.value + "px";
  }

  function removeElement() {
    document.getElementById(activeElementId).remove();
    setActiveElementId(null);
  }

  return (
    <>
      <div>Edit Image Style</div>
      <div className={'form-group'}>
        <label htmlFor="height">Height:</label>
        <input id="height" type="number"
          onChange={changeHeight} defaultValue={100} />
      </div>
      <div className={'form-group'}>
        <label htmlFor="width">Width:</label>
        <input id="width" type="number"
          onChange={changeWidth} defaultValue={100} />
      </div>
      <button onClick={removeElement}><BsTrash />Remove</button>
    </>
  )
}

export default ImageSidebar