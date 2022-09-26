import React, { useState } from 'react'

const TextElement = ({ text }) => {

  const [isContentEditable, setIsContentEditable] = useState(false);

  return (
    <pre contentEditable={isContentEditable}
     onDoubleClick={() => setIsContentEditable(true)}
     onBlur={() => setIsContentEditable(false)}>{text || "Some Text"}</pre>
  )
}

export default TextElement