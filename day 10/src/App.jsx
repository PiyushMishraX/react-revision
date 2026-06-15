import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import UserList from './UserList'
import UserProfile from './UserProfile'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element= {<UserList />} />
        <Route path="/profile" element= {<UserProfile />} />

      </Routes>
    </div>
  )
}

export default App