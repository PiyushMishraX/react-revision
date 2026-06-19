import React from 'react'
import Items from './Items'
import C from './Context'

const Home = () => {
  return (
    <div className='bg-green-500 w-[100] h-[100]'>
        <div className="use-home-container bg-green-500 w-[100] h-100 p-5">

            <div  className='h-30 w-[100] bg-green-300 flex flex-col justify-around p-5 rounded-3xl'>
              <div>FRESH DROPS FREE SHIPPING</div>
              <div><h1>Everything you need , all in one place <span>Icon</span></h1></div>
              <small>Electronics, fashion, accessories and much more - at the best prices.</small>
            </div>

            <div className='js-search p-2 border-2 border-solid border-blue-500 rounded-lg'>
              <div>
                <form >
                  <label htmlFor="search">Icon</label>
                  <input type="text" className='search ml-2 ' placeholder='Search item '  />
                </form>
              </div>
            </div>

            <div>
              <Items />
            </div>
        </div>
    </div>
  )
}

export default Home