import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>

      <h2> {count} </h2>
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;
