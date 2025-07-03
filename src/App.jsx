import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <>
    <nav>
      <Link to="/">Home</Link> | {""}
      <Link to="/about">About</Link> | {""}
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<h2>404 Page Not Found</h2>}/>
    </Routes>
     
    </>
  )
}

export default App