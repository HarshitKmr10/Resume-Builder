import React, { useEffect, useRef, useId } from 'react'
import { useResume } from '../contexts/ResumeProvider';
import { createNewElement } from '../utils/helper';
import ReactDOM from 'react-dom/client';
import TextElement from './TextElement';
import ImageElement from './ImageElement';
import ShapeElement from './ShapeElement';

const Page = ({ resumeElements, isReadOnly }) => {
  const pageId = useId();
  const pageRef = useRef();
  const { setActive } = useResume();

  function addElement(element) {
    const { id, style, elementType, src, text } = element;
    const newElement = createNewElement(pageRef.current, elementType, setActive, isReadOnly);
    newElement.id = id;
    Object.keys(style).forEach(key => newElement.style[key] = style[key]);

    switch (elementType) {
      case "text":
        ReactDOM.createRoot(newElement).render(<TextElement text={text} />);
        break;
      case "image":
        ReactDOM.createRoot(newElement).render(<ImageElement src={src} />);
        break;
      case "shape":
        ReactDOM.createRoot(newElement).render(<ShapeElement style={style} />);
        break;
      default:
        break;
    }

    pageRef.current.appendChild(newElement);
  }

  useEffect(() => {
    if (!resumeElements) return;

    pageRef.current.innerHTML = "";
    resumeElements.map(addElement)

    // eslint-disable-next-line
  }, [resumeElements])

  return (
    <div id={pageId} ref={pageRef} className='page' onDragOver={e => e.preventDefault()}></div>
  )
}

export default Page