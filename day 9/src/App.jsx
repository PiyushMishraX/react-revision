// import { useState } from "react"

// import { memo, useMemo, useState } from "react"
// import useCounter from "./useCounter" 





import React, { useContext } from 'react'
import Home from "./Home"
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Home/> */}
    </div>
  )
}

export default App