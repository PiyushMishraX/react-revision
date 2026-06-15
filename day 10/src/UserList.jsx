// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const UserList = () => {

//     let list= ['A', 'B', 'C', 'D']
//     let navigate = useNavigate()

//     function fun_dynamic_page(id){
//         navigate(`/profile/${id}`)
//     }
//   return (
//     <div>
//         {list.map((data, id)=>{
//             return (<div key={id}>
//             <h2>{data}</h2>
//             {/* <Link to={"/profile"}>
//             <button>Click</button>
//             </Link> */}
//             <button onClick={()=>fun_dynamic_page(id)}>Click</button>
//             </div>)
//         })}
//     </div>
//   )
// }

// export default UserList