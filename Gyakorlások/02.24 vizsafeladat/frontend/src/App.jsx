import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Menu from './elemek/Menu'
import Home from './oldalak/Home'
import Foglaltsag from './oldalak/Foglaltsag'

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foglaltsag" element={<Foglaltsag />} />
      </Routes>
    </>
  )
}

export default App
