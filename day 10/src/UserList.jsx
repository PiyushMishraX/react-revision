import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {

    let list= ['A', 'B', 'C', 'D']
  return (
    <div>
        {list.map((data)=>{
            return (<>
            <h2>data</h2>
            <Link to={"/profile"}>
            <button>Click</button>
            </Link>
            </>)
        })}
    </div>
  )
}

export default UserList