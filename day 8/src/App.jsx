import React, { useMemo } from 'react'
import useCounter from './useCounter'
import './App.css'

const App = () => {

  let { count, inc, dec, reset} = useCounter(0);


  return (
    <div>
      <h1>{count}</h1>
      <button className='btn' onClick={inc}>INc</button>
      <button className='btn' onClick={dec}>DEc</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default App