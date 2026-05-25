import './App.css'

import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(0)

  // function fun1() {
  //   setCount(count+1)  
  // }
  function inc() {
    setCount(count+1)  
  }
  function dec() {
    setCount(count-1)  
  }

  return (
    <div>
      <h2>{count}</h2>
      {/* <button onClick={fun1}>ADD</button> */}
      <button onClick={inc}>ADD</button>
      <button onClick={dec}>Decrease</button>
    </div>
  )
}

export default App