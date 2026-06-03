import React, { useEffect, useState } from "react";
// import '../styles/todo.css'

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
      localStorage.setItem('todoList', JSON.stringify(todos))
  }, [todos])
  

  async function deleteItem(deleteId) {
    const updatedTodos = todos.filter((item) => item.id !== deleteId);
    setTodos(updatedTodos);
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
              <div key={id} >
                <h2>{element}</h2>
                <button onClick={() => deleteItem(id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
