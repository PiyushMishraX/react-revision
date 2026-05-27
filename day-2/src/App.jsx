import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./Form";

const App = () => {
  // let [input, setInput] = useState("");
  // let [data, setData] = useState("");

  // function fun1(e) {
  //   setInput(e.target.value);
  // }

  // function print() {
  //   setData(input);

  //   setInput("");
  // }

  return (
    <div
      style={{
        height: '100vh',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div>
        <h2>{data}</h2>
        <input type="text" id="input" value = {input} onChange={fun1} />
        <button onClick={print} >Hello</button>
      </div> */}

      <Form />
    </div>
  );
};

export default App;
