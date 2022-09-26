import React, { useEffect, useRef } from 'react'

const ShapeElement = ({ style }) => {

  const shapeRef = useRef();

  useEffect(() => {
    if (!style) return;

    Object.keys(style).forEach(key => shapeRef.current.style[key] = style[key]);
  }, [style])

  return (
    <div ref={shapeRef} className='shape'></div>
  )
}

export default ShapeElement