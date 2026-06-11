import React, { useMemo } from 'react'
import useCounter from './useCounter'
import './App.css'

const App = () => {

  let { count, inc, dec, reset} = useCounter(0);

  // function call() {
  //   let res = 0;
  //   for (let i = 0 + 1; i <= 1000000000; i++) {
  //     res += i;
  //   }
  //   return res;
  // }


  // let total = useMemo(() => {
  //   return call();
  // }, [])
  
  // let total = useMemo(() => {
  // function call() {
  //   let res = 0;
  //   for (let i = 0 + 1; i <= 1000000000; i++) {
  //     res += i;
  //   }
  //   return res;
  // }
  //   return call();
  // }, [])
  
  let total = useMemo(() => {
    let res = 0;
    for (let i = 0 + 1; i <= 1000000000; i++) {
      res += i;
    }
    return res;
  }, [])

  

  // let total = call();
  return (
    <div>
      <h1>{count}</h1>
      <h2>{total}</h2>
      <button className='btn' onClick={inc}>INc</button>
      <button className='btn' onClick={dec}>DEc</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}

export default App