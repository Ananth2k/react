import React, { useContext } from 'react'
import UserContext from '../ContextAPI/UserContext'

function useUser() {

const {user, setUser} = useContext(UserContext);

return{user, setUser}
}

export default useUser