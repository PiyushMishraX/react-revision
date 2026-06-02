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

      
      {/* we achive client-side-routing through this  */}
      {/* Server-side routing is a traditional web navigation method where the server handles all URL changes. When a user clicks a link, the browser makes a new HTTP request, and the server returns a completely new HTML document, resulting in a full-page refresh. */}


    </>
  )
}

export default App