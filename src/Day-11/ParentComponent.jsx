import React, { useState } from 'react'
import InputComponent from './InputComponent'
import DisplayComponent from './DisplayComponent'

function ParentComponent() {

const [name,setName] =useState('')

  return (
    <div>
      <InputComponent name={name} setName={setName}/>
      <DisplayComponent name={name}/>
      <button onClick={()=>setName('')}>Reset</button>
    </div>

  )
}

export default ParentComponent