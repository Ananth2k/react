import React, { useEffect, useRef } from 'react'

function AutoFocusInput() {

    const inputRef = useRef(null);

    useEffect (()=>{
        inputRef.current.focus();

    },[])

  return (
   
    <div>
        <h2>Auto Focus Input</h2>
           <input 
        placeholder='normal'
        />
    
        <input 
        ref={inputRef}
        placeholder='Focused on Load'
        />

     
    
    </div>
  )
}

export default AutoFocusInput