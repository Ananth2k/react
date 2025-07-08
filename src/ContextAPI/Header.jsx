import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

function Header() {

    const {user}= useContext(UserContext);





  return (
    <header>
        <h1>Welcome,  {user.name}</h1>
    </header>
  )
}

export default Header