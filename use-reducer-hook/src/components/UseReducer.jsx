import React, { useReducer } from "react";

const reducer = (state, action) => {

  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    
    case "WITHDRAW":
        return state - action.payload;
    default:
      return state;
  }
};

function UseReducer() {
  //   action creator
  const deposit = (amount) => {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };

  //withdraw 

  const withdraw = (amount) =>{
    dispatch({
        type: "WITHDRAW",
        payload: amount
    })
  }
  const [amount, dispatch] = useReducer(reducer, 5000);
  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>DEPOSIT</button> 
      <button onClick={() => withdraw(500)}>WITHDRAW</button>
    </div>
  );
}

export default UseReducer;