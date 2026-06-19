import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      {/* <div className='bg-amber-500'>Div</div> */}
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/cart' element={ <Cart />} />
      </Routes>
    </div>
  )
}

export default App