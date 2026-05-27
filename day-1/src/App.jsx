import './App.css'

import React from 'react'
import { useState } from 'react';

// const App = () => {
//   let [count, setCount] = useState(0)

//   // function fun1() {
//   //   setCount(count+1)  
//   // }
//   function inc() {
//     setCount(count+1)  
//   }
//   function dec() {
//     setCount(count-1)  
//   }

//   return (
//     <div>
//       <h2>{count}</h2>
//       {/* <button onClick={fun1}>ADD</button> */}
//       <button onClick={inc}>ADD</button>
//       <button onClick={dec}>Decrease</button>
//     </div>
//   )
// }

// const App = () => {
//   let [color, setColor] = useState("red")

//   function fun1() {
//     // setColor("green")  
//     setColor(color==="red"?"green": "red") // using ternary operator
//   }

//   return (
//     // <h2>hello</h2>
//     <div style=  {{backgroundColor:color,height:"100vh"}}>
    
//       <button onClick={fun1}>ADD</button>
//     </div>
//   )
// }

import ghar from './Home.jsx'

const App = () => {
  return (
    <div>
      App
      <ghar />
      <Home/>
    </div>
  )
}


const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default App