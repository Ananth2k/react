import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id,name} =useParams();
const[count, setCount]= useState(0);

const [mail, setMail] =useState('')

const emailHandler= (e)=>{
e.preventDefault();
setMail(e.target.value);
}



  return (
    <div>
        <h2>{name} Details</h2>
        <p>User ID Form url : {id}</p>


      <form>
        <label>Mail</label>
        <input 
        type="email"
       placeholder='enter Email'
       onChange={emailHandler}
       value={mail} 
        
        />

        <p>Mail is {mail}</p>

        <button type='submit'>Submit</button>
      </form>



        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>


    </div>
  )
}

export default UserDetails;