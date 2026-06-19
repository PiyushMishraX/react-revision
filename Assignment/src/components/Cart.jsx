import React, { useContext } from 'react'
import C from './Context';

const Cart = () => {
    let { state, dispatch } = useContext(C);
    console.log(state)
  return (
    <div className='p-5'>
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
              className="border-2 p-1 cursor-pointer"
            >Remove from Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart