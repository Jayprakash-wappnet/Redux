import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { clearCart } from '../redux/slices/cartSlice';


const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  const dispatch = useDispatch();
  console.log('items:', items);
  console.log('total:', total);


  return (
    <div className="alert alert-success d-flex justify-content-between sticky-top">
      <div className="title">
        <h3 className="text-center">
          Total Items: {items.length} (Rs. {total})/-
        </h3>
      </div>
      <div>
        <button className="btn btn-danger" onClick={ (e) => dispatch( clearCart() ) }>Clear All</button>
      </div>
    </div>
  );
};

export default Cart;
