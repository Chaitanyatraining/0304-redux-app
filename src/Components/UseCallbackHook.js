import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const UseCallbackHook = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])

  return (
    <div>
        <h2>UseCallbackHook</h2>
        <p>Count: {count}</p>
        <ChildComponent handleClick={handleClick} />
    </div>
  )
}

// export function childComponent({handleClick}){
//     return <button className='btn btn-primary' 
//     onClick={handleClick}
//     >Increment</button>
// }


export default UseCallbackHook