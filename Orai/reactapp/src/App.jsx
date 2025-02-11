import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import {Home, About, Contact, Services} from './components/pages'
import { Navbar } from './components/Navbar'
function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
    </div>
  )
}

export default App
