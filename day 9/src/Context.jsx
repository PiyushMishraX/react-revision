import { createContext, useReducer } from "react";
import Cart from "./Cart";

let C = createContext();
export default C;
let data = {
  apiData: [],
  cart: [],
};

const Context = ({ children }) => {
  function reduser(state, action) {
    console.log(action, "actoionsnsnsnsnsnsns");
    if (action.type == "add_Data") {
      return {
        ...state,
        apiData: action.payload,
      };
    }

    if (action.type === "add_to_Cart") {
      console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    if (action.type === "remove_from_Cart") {
      console.log(action.payload);
      return {
        ...state,
    //     cart: [...state.cart, action.payload],
        cart: state.cart.filter(element => element.id !== action.payload   )
      };
    }
  }

  let [state, dispatch] = useReducer(reduser, data);
  return <C.Provider value={{ state, dispatch }}>{children}</C.Provider>;
};
export { Context };
