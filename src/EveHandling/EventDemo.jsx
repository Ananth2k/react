import React from 'react'
import {useState} from 'react'

function EventDemo() {

const [message, setMessage] = useState('')

const submitHandle = () =>{
  setMessage("You clicked the Button")
}

  return (
   <>
   <h1>EventDemo</h1>
   
   <input 

    value = {message}
    placeholder = "write a message" 
    onChange = {(e)=>setMessage(e.target.value)}

    />

    <p>{message}</p>

    <button onClick={submitHandle}>Submit</button>

    <button onClick={()=>setMessage('')}>Clear</button>
   </>
  )
}

export default EventDemo