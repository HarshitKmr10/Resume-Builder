import { v4 as uuid } from "uuid";

function dragStart(e) {
  e.dataTransfer.setData("element", e.target.id);
  const img = new Image();
  img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  e.dataTransfer.setDragImage(img, 0, 0);
}

export const createNewElement = (activePage, type, setActive) => {
  const { top, left, height, width } = activePage.getBoundingClientRect();
  const element = document.createElement("div");
  element.id = uuid();
  element.className = "element";
  element.style.top = "50%";
  element.style.left = "50%";
  element.setAttribute("element-type", type);
  element.tabIndex = -1;
  element.draggable = true;
  element.ondragstart = dragStart;
  element.ondrag = (e) => {
    element.style.top = (100 * (e.y - top) / height) + "%";
    element.style.left = (100 * (e.x - left) / width) + "%";
  }
  element.onclick = () => setActive(element.id);
  return element;
}