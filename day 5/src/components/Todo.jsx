import React, { useEffect, useState } from "react";
// import '../styles/todo.css'

const Todo = () => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");
  const [updateIndex, setUpdateIndex] = useState(-1);

  // const addElement = document.getElementsByClassName("add")
  // const editElement = document.querySelector(".edit")

  const [todos, setTodos] = useState(()=>{

    // ([] || JSON.parse(localStorage.getItem("todoList")))
    let data = localStorage.getItem("todoList")
    if(data) {
        return JSON.parse(data)
    }

    return []
  });
  useEffect(()=>{
      localStorage.setItem("todoList", JSON.stringify(todos))
  }, [todos])
  

  async function deleteItem(deleteId) {
    const updatedTodos = todos.filter((item,index) => index !== deleteId);
    setTodos(updatedTodos);
  }

//   const [edit, setEdit] = useState("")
  async function editItem(id) {
    const addElement = document.querySelectorAll(".add")
    addElement[0].classList.add('addHide')
    addElement[1].classList.add('addHide')
    // let edit = String(prompt(`Current: ${todos[id]} ,Edit: `));

    await setEdit(todos[id])
    console.log(edit)
    console.log(todos[id])
    await setUpdateIndex(id)

    const editElement = document.querySelectorAll(".edit")
    editElement[0].classList.remove('edits')
    editElement[1].classList.remove('edits')

    // if(edit){


    //     // todos[id] = edit;
    //     setTodos(todos => todos.map((item, index) => index === id ? edit : item) );
    // } 
    
  }

  function addUpdateItem(){
    if(edit){
        // todos[id] = edit;
        setTodos(todos => todos.map((item, index) => index === updateIndex ? edit : item) );
    } 


    const addElement = document.querySelectorAll(".add")
    addElement[0].classList.remove('addHide')
    addElement[1].classList.remove('addHide')

    const editElement = document.querySelectorAll(".edit")
    editElement[0].classList.add('edits')
    editElement[1].classList.add('edits')
  }

  return (
    <div id="tasks">
      <div id="input">
        <div>Todo List</div>
        <input className="add" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add"
          onClick={() => {
            if (input.trim() !== "") {
              setTodos([...todos,input ]);
              setInput("");
            } else {
                alert("Enter a value")
            }
          }}
        >
          add
        </button>

        <input className="edit edits" type="text" value={edit} onChange={(e) => setEdit(e.target.value)} />

        <button className="edit edits"
          onClick={() => {
              addUpdateItem(edit)
          }}
        >Update</button>

        <div id="list">
          {todos.map((element,id) => {
            return (
              <div key={element.id} >
                <h2 id="written">{element}</h2>
                <button onClick={() => {deleteItem(id)}}>Delete</button>
                <button onClick={()=>{
                    editItem(id)
                }}>Edit</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
