import React from 'react'
import { useState } from 'react'
export const AppCount = () => {
    const [a, setA] = useState(1)
  return (
    <div>
        {a}
        <button onClick={()=>setA(a+1)}>Change</button>
        
    </div>
  )
}
