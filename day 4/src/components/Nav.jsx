import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <>
    <nav>
        <Link to={"/"}> <li>Home</li></Link>
        <Link to={"/about"}> <li>About</li></Link>
        <Link to={"/task"}> <li>Task</li></Link>

    </nav>
    </>
  )
}

export default Nav