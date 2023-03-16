import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import { saveTaskToRedux } from "./redux/reducer";


function App() {

  const [input,setInput] = useState();
  const statex = useSelector((state) => state);
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  
  const saveToRedux = () => {
    dispatch(saveTaskToRedux(input))
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      <input value={input} onChange={changeHandler}></input>
      <button onClick={saveToRedux}>Save Task</button>
      {statex.tasks.map(task => (<h4> {task} </h4>))}
    </div>
  );
}

export default App;
