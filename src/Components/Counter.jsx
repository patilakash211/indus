import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0);

    const handleChange = (value)=>{
        setCount(count + value);
    }
   
  return (
    <div>
    <div>
        Counter:{count}
    </div>
    <button onClick={()=>handleChange(1)}>ADD</button>
    <button onClick={()=>handleChange(-1)}>SUB</button>
    </div>
  )
}
