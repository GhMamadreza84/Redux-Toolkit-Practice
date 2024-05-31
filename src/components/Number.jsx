import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement } from "../features/number/NumberSlice";
import Store from "../app/Store";

const Counter = () => {
  const number = useSelector((Store) => Store.number.numberValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number is {number}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <hr />
    </div>
  );
};

export default Counter;
