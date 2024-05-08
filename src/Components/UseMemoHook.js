import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0)

    const multipleCount = useMemo(() => {
        return count * 2
    }, [count])
    
  return (
    <div>
        <h2>UseMemoHook</h2>
        <h3>Count : {count}</h3>
        <button className='btn btn-primary' 
        onClick={() => setCount(count+1)}
        >Increment</button>
        <h4>multipled Value: {multipleCount}</h4>
    </div>
  )
}

export default UseMemoHook