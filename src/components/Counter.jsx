import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  incrementByAmount,
  selectCounter,
} from "../features/counter/CounterSlice";
import { increment, decrement } from "../features/counter/CounterSlice";
import Store from "../app/Store";

const Counter = () => {
  const [value, setValue] = useState(2);
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(+value))}>
        Increment By Amount
      </button>
      <br />
      <hr />
    </div>
  );
};

export default Counter;
