// Import useSelector and useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
// Import action creators
import { increment, decrement } from "../actions/action";
const Counter = () => {
  // Use the useSelector hook to access the count property from the store
  const count = useSelector((state) => state.count);
  // Use the useDispatch hook to dispatch actions to the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
