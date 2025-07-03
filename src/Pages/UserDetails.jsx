import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {id,name} =useParams();
  return (
    <div>
        <h2>{name} Details</h2>
        <p>User ID Form url : {id}</p>
    </div>
  )
}

export default UserDetails;