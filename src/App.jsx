import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Project from './Pages/Project/Project'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
