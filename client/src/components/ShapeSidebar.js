import React from 'react';
import { BsTrash } from 'react-icons/bs';

const ShapeSidebar = ({ activeElementId, setActiveElementId }) => {
  const styles = document.getElementById(activeElementId).style;
  const shapeStyles = document.getElementById(activeElementId).querySelector(".shape").style;

  function changeHeight(e) {
    styles["height"] = e.target.value + "px";
    shapeStyles["height"] = e.target.value + "px";
  }

  function changeWidth(e) {
    styles["width"] = e.target.value + "px";
    shapeStyles["width"] = e.target.value + "px";
  }

  function changeBorderRadius(e) {
    styles["borderRadius"] = e.target.value + "%";
    shapeStyles["borderRadius"] = e.target.value + "%";
  }

  function changeBackgroundColor(e) {
    styles["backgroundColor"] = e.target.value;
    shapeStyles["backgroundColor"] = e.target.value;
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
      <div className={'form-group'}>
        <label htmlFor="border-radius">Border Radius:</label>
        <input id="border-radius" type="number" max={100} min={0}
          onChange={changeBorderRadius} defaultValue={0} />
      </div>
      <div className={'form-group'}>
        <label htmlFor="bg-color">Background Color:</label>
        <input id="bg-color" type="color"
          onChange={changeBackgroundColor} defaultValue={"#5F7BCD"} />
      </div>
      <button onClick={removeElement}><BsTrash />Remove</button>
    </>
  )
}

export default ShapeSidebar