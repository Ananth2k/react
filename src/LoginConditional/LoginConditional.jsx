import React, { useState } from 'react'
import WelcomeUser from './WelcomeUser';
import LoginForm from './LoginForm';


function LoginConditional() {
  const [loggedIn, setLoggedIn] = useState(false);
  const LogHandler = () =>{
    setLoggedIn(tamil => !tamil)
  }




  return (
    <div>
      {loggedIn ? (
        <WelcomeUser/>
        ) :(
        <LoginForm/>
        )
      }
      <button onClick={LogHandler}>{loggedIn ? "Log Out" : "Log In"}</button>
    </div>
    )
}



export default LoginConditional