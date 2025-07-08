import React, { useContext,useState } from 'react'
import UserContext from './UserContext';

function Profile() {

    const {user,setUser} = useContext(UserContext);
    
    const[name, setName]=useState(user.name);
    const[email, setMail]=useState(user.email);


  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email }); // Update global state
  };


  return (
    <div>
        <h2>User Profile</h2>
        <p>User Name is: {user.name}</p>
        <p>User mail is: {user.email}</p>

        <form onSubmit={handleSubmit}>
            <h3>Update User</h3>

            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter name'
            
            />

            <input

            type='email'
            placeholder='enter Mail'
            onChange={(e)=>setMail(e.target.value)}
            value={email}           
            
            />

            <button type="submit">Update</button>



        </form>

    </div>
  )
}

export default Profile