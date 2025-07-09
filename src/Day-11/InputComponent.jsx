import React from 'react'

function InputComponent({name, setName}) {
  return (
    <div>
      <input 
      value={name}
      placeholder='Enter your name'
      onChange={(e)=>setName(e.target.value)}
      
      />
      
    </div>
  )
}

export default InputComponent