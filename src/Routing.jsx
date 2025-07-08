import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Link, Route, Routes } from 'react-router-dom'
import UserDetails from './Pages/UserDetails'
import UserList from './Pages/UserList'

function Routing() {
  return (
    <div>
         <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link> | {" "}
      <Link to="/contact">Contact</Link> | {" "}
      <Link  to="/users">Users</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/user/:id/:name" element={<UserDetails/>}/>

      <Route path="*" element={<h2>404 Page Not Found</h2>}/>
    </Routes>
     
    </div>
  )
}

export default Routing