import React from 'react'

const ChildComponent = ({handleClick}) => {
  return (
    <div>
        <h2>ChildComponent</h2>
        <button className='btn btn-primary' 
    onClick={handleClick}
    >Increment</button>
    </div>
  )
}

export default ChildComponent