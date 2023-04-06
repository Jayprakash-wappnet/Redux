import React from "react";
import { addItem, removeItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={props.id} style={{ width: "18rem", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="btn btn-success"
        >
          Add to cart
        </button> <br/>
        <button
          onClick={(e) =>
            // dispatch(removeItem({ id: props.id }))
            console.log(props.id)
          }
          className="btn btn-danger"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
