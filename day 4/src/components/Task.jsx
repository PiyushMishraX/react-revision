// KING ( gives the page no. of final page) --> Math.ceil(products.length / ITEMS_PER_PAGE);

import React, { useState } from "react";
import "../styles/task.css";

const Task = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const PER_PAGE_ITEMS = 3;

  // async function load(pageNo) {
  //   let inital = pageNo * 3 - 3; // 0 based indexing
  //   for (let i = inital; i <= inital + 2; i++) {
  //     const element = products[i];
  //     console.log(element);

  //     if (!element) break;

  //     console.log(arr[i]);

  //     const container = document.createElement("div");

  //     const image = document.createElement("img");
  //     image.src = element.thumbnail;
  //     const title = document.createElement("h4");
  //     const price = document.createElement("h5");
  //     const deleteBtn = document.createElement("button");

  //     title.innerText = element.title;
  //     price.innerText = element.price;
  //     deleteBtn.innerText = "delete";

  //     deleteBtn.onclick = function () {
  //       deleteItem(i);
  //     };

  //     container.appendChild(image);
  //     container.appendChild(title);
  //     container.appendChild(price);
  //     container.appendChild(deleteBtn);

  //     items.appendChild(container);
  //   }
  // }

  async function deleteItem(index) {
    const updateProducts = products.splice(index, 1);
    await setProducts(updateProducts);

    let items = document.querySelector("#elements");
    if (items) items.innerHTML = "";

    load(page * 3 - 2);
  }

  async function searchIt(pageNo) {
    if (!search.trim()) {
      alert("enter a value");
      return;
    }

    let res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    let data = await res.json();
    console.log(data);

    await setProducts(data.products.sort((a, b) => a.price - b.price));
    setPage(1);
    // console.log(page);

    // load(pageNo);

    await setSearch("");
  }

  async function nextPage() {
    const lastPage = Math.ceil(products.length / PER_PAGE_ITEMS);
    if (page < lastPage) {
      await setPage(page + 1);
    }
  }
  async function previousPage() {
    if (page > 1) {
      await setPage(page - 1);
    }
  }

  async function deleteItem(deleteId) {
    const updatedProducts = products.filter((item) => item.id !== deleteId);
    setProducts(updatedProducts);
  }

  // it reloads on each render
  const indexStart = (page - 1) * PER_PAGE_ITEMS;
  const currentItems = products.slice(indexStart, indexStart + PER_PAGE_ITEMS);
  // console.log(currentItems);

  const textElement = document.getElementById("delayed-text") || 0;  

  // if(textElement){
  //   setTimeout(() => {
  //     textElement.style.display = "block";
  //   }, 500);
    
  // }
  return (
    // <>
    <div id="task">
      <div>
      <div id="menu">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <h2>{search}</h2> */}
        <button
          onClick={() => {
            searchIt(1);
          }}
        >
          SEARCH
        </button>

        <div className="pageChange">
          <button onClick={previousPage} disabled={page <= 1}>
            Previous page
          </button>
          <div id="pageNo">{page}</div>
          {/* <span > </span> */}
          <button
            onClick={nextPage}
            disabled={page >= Math.ceil(products.length / PER_PAGE_ITEMS)}
          >
            Next page
          </button>
        </div>
      </div>

      <div id="elements">
        {currentItems.map((element) => {
          return (
            <div key={element.id} className="product-container">
              <img src={element.thumbnail} alt={element.title} />
              {/* <div id="delayed-text" style={{display: "none"}}> */}
                <h4>{element.title}</h4>
                <h5>{element.price}</h5>
                <button onClick={() => deleteItem(element.id)}>Delete</button>
              </div>
            // </div>
          );
        })}
      </div>

      {/* <div id="elements"></div> */}
      {/* </> */}
      </div>
    </div>
  );
};

export default Task;

// The Math.ceil() static method in JavaScript always rounds a number up to the next largest integer, returning the smallest integer greater than or equal to the given number.
