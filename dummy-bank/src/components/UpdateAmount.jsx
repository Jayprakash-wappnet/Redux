import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
  const {addMoney,deductMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h2>Withdraw/Deposit</h2>
      <button
        className="btn btn-danger mx-2"
        onClick={() => {
          deductMoney(100)
        }}
      >
        -
      </button>
        Update Balance
      <button
        className="btn btn-success mx-2 "
        onClick={() => {
         addMoney(100)
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
