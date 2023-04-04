import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1> {account}</h1>
      <button onClick={ () => depositeMoney(1000)}> Deposit</button> <br />
      <button onClick={ () => withdrawMoney(1000)}> Withdraw</button>
    </div>
  );
}

export default App;
