import React, { useState } from 'react'
import './App.css'

let arr = [];

const App = () => {

  let items = document.querySelector("#elements")

  const [search, setSearch] = useState("")

  const [page, setPage] = useState(1)


  async function onFetch (){
    arr = await searchIt();
    console.log(arr)

    load(1)
    
  }

  async function previousPage() {
    if(page<=1){
      return;
    }
    await setPage(page-1)

    let dataStart = (page-1)*3 -2;

    let items = document.querySelector("#elements")
    items.innerHTML = ""

  
    // searchIt(dataStart)
    await load(dataStart)
  }

    
  async function nextPage() {

    console.log(page)
    
     setPage(page+1)

    let dataStart = (page+1)*3 -2;

    let items = document.querySelector("#elements")
    items.innerHTML = ""

    // searchIt(dataStart)

    // console.log(dataStart)
    console.log(arr)
    load(dataStart)

    
  }



  

  function load(dataStart) {
    console.log("load")
    for(let i = dataStart; i <= dataStart+2; i++){
      // console.log(dataStart)
      const element = arr[i-1]

      if(!element) break;

      console.log(arr[i])

      const container = document.createElement('div')


      const image = document.createElement('img')
      image.src = element.thumbnail
      const title = document.createElement('h4')
      const price = document.createElement('h5')

      title.innerText = element.title;
      price.innerText = element.price;


      container.appendChild(image)
      container.appendChild(title)
      container.appendChild(price)

      // document.body.appendChild(container)
      items.appendChild(container)
    }
    
  }


  
  // async function searchIt (dataStart = 1 ){
  async function searchIt (){
    // console.log("heelo" + dataStart)
    
    if(!search.trim()){
      alert("enter a value")
      return;
    }

    let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    let data =  await res.json();
    console.log(data);

    let arr = data.products

    arr = arr.sort((a,b) => a.price - b.price)

    // console.log(arr)

    return arr;

    // arr = 
    
    // data.products.forEach(element => {
    // arr.forEach(element => {
      

    //   const container = document.createElement('div')


    //   const image = document.createElement('img')
    //   image.src = element.thumbnail
    //   const title = document.createElement('h4')
    //   const price = document.createElement('h5')

    //   title.innerText = element.title;
    //   price.innerText = element.price;


    //   container.appendChild(image)
    //   container.appendChild(title)
    //   container.appendChild(price)

    //   document.body.appendChild(container)
    // });

    // console.log(dataStart)



    // for(let i = dataStart; i <= dataStart+2; i++){
    //   console.log(dataStart)
    //   const element = arr[i]

    //   if(!element) break;

    //   const container = document.createElement('div')


    //   const image = document.createElement('img')
    //   image.src = element.thumbnail
    //   const title = document.createElement('h4')
    //   const price = document.createElement('h5')

    //   title.innerText = element.title;
    //   price.innerText = element.price;


    //   container.appendChild(image)
    //   container.appendChild(title)
    //   container.appendChild(price)

    //   // document.body.appendChild(container)
    //   items.appendChild(container)
    // }




    
    

    // Image(!)

    }

  

  
  return (
    <div>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}} /><br />
      {/* <button onClick={searchIt}> Fetch</button> */}
      <button onClick={(e)=> {onFetch()}}> Fetch</button>

      <h2>{search}</h2>


      <button onClick={previousPage}>Previous page</button>{page}
      <button onClick={nextPage}>Next page</button>
      <div id='elements'></div>
    </div>
  )
}

export default App