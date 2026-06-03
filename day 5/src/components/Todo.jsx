import React, { useEffect, useState } from "react";
// import '../styles/todo.css'

const Todo = () => {
  const [input, setInput] = useState("");
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

  const [edit, setEdit] = useState("")
  async function editItem(id) {
    let edit = String(prompt(`Current: ${todos[id]} ,Edit: `));
    if(edit){

        // todos[id] = edit;
        setTodos(todos => todos.map((item, index) => index === id ? edit : item) );
    } 
    
  }

  return (
    <div id="tasks">
      <div id="input">
        <div>Todo List</div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button
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
