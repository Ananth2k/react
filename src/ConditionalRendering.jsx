import React, { useState } from 'react'

function ConditionalRendering() {

const [logged, setLogged] = useState(false);



  return (
    <>
    <h1>Conditional Rendering</h1>

    <h2>{logged ? "Welcome" : "please login"}</h2>

{logged ?(
  
 <button onClick={()=>setLogged(false)}> Logout</button>

  ) :(
   <button disabled={logged} onClick={()=>setLogged(true)}>Login</button>
  )}





    

   
    </>
    
  )
}

export default ConditionalRendering