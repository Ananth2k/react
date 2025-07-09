import React from 'react'
import { Route, Routes ,Link} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import UserDetails from '../Pages/UserDetails'
import NotFound from './NotFound'

function UserDashboard() {
  return (
    <div>
        <nav>
<Link to="/">Login</Link> | {" "}
<Link to="/dashboard">Dashboard</Link>
        </nav>
        
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/user/:id" element={<UserDetails/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>




    </div>
  )
}

export default UserDashboard