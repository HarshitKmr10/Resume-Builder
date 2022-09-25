import React from 'react'

const Page = () => {

  function handleDrop(e) {
    e.preventDefault();
    // console.log(e)
  }

  return (
    <div className='page' onDrop={handleDrop} onDragOver={e => e.preventDefault()}></div>
  )
}

export default Page