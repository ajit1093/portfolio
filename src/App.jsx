import { useState } from 'react'


import './App.scss'

// import virat from '../src/assets/8393536.jpg'
// import ShapeExample from './component/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Containers/Home/Home'
import About from './Containers/About/About'

import Contact from './Containers/Contact/Contact'
import Skills from './Containers/Skills/Skills'
import Navbar from './component/NavBar/NavBar'
import ErrorPage from './Containers/errorPage/EroorPage'
import Footer from './component/Footer/Footer'
import Project from './Containers/Project/Project'

function App() {

  return (
    <>
    <div className="App">

      
      {/* Navbar */}
      <Navbar/>

      {/* Main page content */}
     <div className="App__main-page-content">
     <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
     </div>

     <Footer/>
      </div>
    </>
  )
}

export default App
