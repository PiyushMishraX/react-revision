// import React, { useMemo } from 'react'
// import useCounter from './useCounter'
// import './App.css'

// const App = () => {

//   let { count, inc, dec, reset} = useCounter(0);

//   // function call() {
//   //   let res = 0;
//   //   for (let i = 0 + 1; i <= 1000000000; i++) {
//   //     res += i;
//   //   }
//   //   return res;
//   // }


//   // let total = useMemo(() => {
//   //   return call();
//   // }, [])
  
//   // let total = useMemo(() => {
//   // function call() {
//   //   let res = 0;
//   //   for (let i = 0 + 1; i <= 1000000000; i++) {
//   //     res += i;
//   //   }
//   //   return res;
//   // }
//   //   return call();
//   // }, [])
  
//   let total = useMemo(() => {
//     let res = 0;
//     for (let i = 0 + 1; i <= 1000000000; i++) {
//       res += i;
//     }
//     return res;
//   }, [])

  

//   // let total = call();
//   return (
//     <div>
//       <h1>{count}</h1>
//       <h2>{total}</h2>
//       <button className='btn' onClick={inc}>INc</button>
//       <button className='btn' onClick={dec}>DEc</button>
//       <button className='btn' onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   let [ count, setCount ] = useState(0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>setCount(count+1)}>add</button>
//       <Child/>
      
//     </div>
//   )
// }

// // <Child /> reloads too multiple times  which is unneccesary

// const Child = () => {
//   console.log("hello")

//   return (
//     <div>
//       hello
//     </div>
//   )
// }


// export default App




import React, { memo, useState } from 'react'

const App = () => {
  let [ count, setCount ] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>add</button>
      <Child/>
      
    </div>
  )
}

// memo is a Higher-Order Component (HOC) used to wrap an entire component to prevent it from re-rendering.
// useMemo is a React Hook used inside a component to cache the result of a heavy calculation or formula.

let Child = memo(() => {
  console.log("hello")

  return (
    <div>
      hello
    </div>
  )
})



export default App



