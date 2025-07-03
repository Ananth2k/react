import React, { useState, useEffect } from 'react'

function EffectDemo() {
    const [count, setCount] = useState(0);
useEffect(()=>{
    document.title=`count is ${count}`
},
[count])



  return (
   <>

   <p>Count is {count}</p>
   <button onClick={()=>setCount(count+1)}>Add Num</button>
   
   
    </>
  
  )
}

export default EffectDemo;
