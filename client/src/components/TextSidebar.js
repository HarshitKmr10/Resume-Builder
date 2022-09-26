import React from 'react';
import { BsTrash } from "react-icons/bs"

const TextSidebar = ({ activeElementId, setActiveElementId }) => {

  const styles = document.getElementById(activeElementId).style;

  function changeFontSize(e) {
    styles["fontSize"] = e.target.value + "px";
  }

  function changeColor(e) {
    styles["color"] = e.target.value;
  }

  function toggleBold(e) {
    if (e.target.classList.contains("active")) {
      styles["fontWeight"] = "normal";
    } else {
      styles["fontWeight"] = "bold";
    }

    e.target.classList.toggle("active");
  }

  function toggleItalics(e) {
    if (e.target.classList.contains("active")) {
      styles["fontStyle"] = "normal";
    } else {
      styles["fontStyle"] = "italic";
    }

    e.target.classList.toggle("active");
  }

  function toggleUnderline(e) {
    if (e.target.classList.contains("active")) {
      styles["textDecoration"] = "none";
    } else {
      styles["textDecoration"] = "underline";
    }

    e.target.classList.toggle("active");
  }

  function removeElement() {
    document.getElementById(activeElementId).remove();
    setActiveElementId(null);
  }

  function rgbToHex(rgb) {
    const [r, g, b] = rgb.replace("rgb", "").slice(1, -1).split(", ").map(parseInt);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <>
    <div>Edit Text Style</div>
      <div className={'form-group'}>
        <label htmlFor="font-size">Font Size:</label>
        <input id="font-size" type="number" step={0.1}
          onChange={changeFontSize} defaultValue={styles["fontSize"].slice(0, -2) || 16} />
      </div>
      <div className='form-group'>
        <label htmlFor="color">Color:</label>
        <input id="color" type="color"
          onChange={changeColor} defaultValue={rgbToHex(styles["color"]) || "#000"} />
      </div>
      <div className='font-styles'>
        <span className={(styles["fontWeight"] === "bold") ? "active" : ""}
          onClick={toggleBold}><b>B</b></span>
        <span className={(styles["fontStyle"] === "italic") ? "active" : ""}
          onClick={toggleItalics}><i>I</i></span>
        <span className={(styles["textDecoration"] === "underline") ? "active" : ""}
          onClick={toggleUnderline}><u>U</u></span>
      </div>
      <button onClick={removeElement}><BsTrash />Remove</button>
    </>
  )
}

export default TextSidebar