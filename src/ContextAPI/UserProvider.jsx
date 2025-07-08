import React, { useState } from 'react'
import UserContext from './UserContext';

function UserProvider({children}) {

const [user, setUser] = useState({
    name:"Ananth",
    email: "ananth@gmail.com"
});


  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider