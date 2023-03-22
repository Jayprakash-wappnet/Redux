import React from "react";
import { useState } from "react";
import { addTodo, deleteTodo, removeAll } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <h2>Add your to-do list 📝</h2>

        <div>
          <input
            type="text"
            style={{ margin: 10, padding: 20 }}
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Add your todo ✍️..."
          />
          <button
            onClick={() => dispatch(addTodo(inputData), setInputData(" "))}
          >
            <BsFillPlusCircleFill />
          </button>
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h3>{elem.data}</h3>
                <button onClick={() => dispatch(deleteTodo(elem.id))}>
                  <AiTwotoneDelete />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
