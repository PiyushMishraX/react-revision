import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-15 flex p-2 w-[100] justify-between '>
        <Link to={'/'}> 
            <li>
                <div className='flex min-w-40 justify-around bg-amber-300'>
                <div>Icon</div>
                <div>Shop <span>Kart</span></div>
            </div>
        </li>
        </Link>
        <Link to={'/cart'}> 
            <li>
                <div>
            
                    <div className='border-2 border-solid border-blue-500 rounded-lg p-1' >Icon <span>Cart</span></div>
                </div>
            </li>
        </Link>
        
    </div>
  )
}

export default NavBar