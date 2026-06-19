import React, { useEffect } from "react";
import { useContext } from "react";
import C from "./Context";

const Items = () => {
  let { state, dispatch } = useContext(C);
  console.log(state, "statetetetetetet");

  useEffect(() => {
    async function call() {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
    //   console.log(data, "'he");
      dispatch({ type: "add_Data", payload: data.products });
    }
    call();
  }, []);
  return (
    <div className="flex gap-2 flex-wrap">
      {state.apiData.map((a) => {
        // console.log(a, "aaa");

        return (
          <div key={a.id}>
            <img src={a.thumbnail} />
            <p>{a.title}</p>
            <button
              onClick={() => {
                dispatch({ type: "add_to_Cart", payload: a });
              }}
              className="border-2 p-1 cursor-pointer"
            >Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
