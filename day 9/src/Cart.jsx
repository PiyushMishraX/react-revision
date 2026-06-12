import React, { useContext } from 'react'
import C from './Context';

const Cart = () => {
    let { state, dispatch } = useContext(C);
  return (
    <div>
      {state.cart.map((a) => {
        console.log(a, "cart");

        return (
          <div key={a.id}>
            <img src={a.thumbnail} />
            <p>{a.title}</p>
            <button
              onClick={() => {
                dispatch({ type: "remove_from_Cart", payload: a.id });
              }}
            >Remove from Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart