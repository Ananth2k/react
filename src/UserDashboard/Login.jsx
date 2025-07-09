import React, { useEffect, useState, useRef } from 'react'

function Login() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

const inputRef = useRef(null);

useEffect (()=>{
inputRef.current.focus();


},[])

const Clear = ()=>{
    setName("");
    setEmail("");
}

const FormValidation = (e)=>{
    e.preventDefault();
    console.log(name)
    if (!name || !email){
        alert("fill the form");
    }
    else{
        
    }


}

  return (
  <>
    <h2>Login Page</h2>

    <form onSubmit={FormValidation}>
        <label>Name : 
            <input
            type='text'
            ref={inputRef}
        value={name}
        placeholder='enter Name'
        onChange={(e)=>setName(e.target.value)}
        
        />
        </label>
<br/>
        <label>Email :
        <input 
        type="text"
        value={email}
        placeholder='enter Mail'
        onChange={(e)=>setEmail(e.target.value)}
        />


        </label>
        <br/>
<button >Submit</button>
        
    </form>
    <br/>
  <button onClick={Clear}>Clear</button>
  </>
  )
}

export default Login