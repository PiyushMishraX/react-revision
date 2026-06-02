import React from 'react'
import './App.css'
import Nav from './components/Nav'
import { Route, Router, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Task from './components/Task'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/task"} element={<Task />} />
        <Route path={"/about"} element={<About/>} />
      </Routes>

      


    </>
  )
}

export default App