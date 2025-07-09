import React, { useState } from 'react'

function SimpleForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

const formHandler = (e) =>{
    e.preventDefault();
    if(!name || !email){
        alert("Please fill all the fields");
        return;
    }
    else{
        alert("Form submitted successfully! " + name);
        setName('');    
        setEmail('');
    }


    console.log("name is "+ name);
    console.log("email is "+ email)
}


  return (



    <div>
        <form onSubmit={formHandler}>
            <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
                   />

            <input 
            
            type="email"
            placeholder="Enter your email"  
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            /> 
            <button disabled={!name || !email} type="submit" >Submit</button>

        </form>

        <p>Name is {name}</p>
        <p>Email is {email}</p>
    </div>
  )
}

export default SimpleForm