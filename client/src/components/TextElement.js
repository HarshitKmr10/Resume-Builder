import React, { useState } from 'react'

const TextElement = () => {

  const [isContentEditable, setIsContentEditable] = useState(false);

  return (
    <pre contentEditable={isContentEditable}
     onDoubleClick={() => setIsContentEditable(true)}
     onBlur={() => setIsContentEditable(false)}>Some Text</pre>
  )
}

export default TextElement