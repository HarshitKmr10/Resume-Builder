import React, { useId } from 'react'

const Page = () => {
  const pageId = useId();

  return (
    <div id={pageId} className='page' onDragOver={e => e.preventDefault()}></div>
  )
}

export default Page