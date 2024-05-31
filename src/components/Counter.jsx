import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, selectCounter } from "../features/CounterSlice";
import { increment, decrement } from "../features/CounterSlice";
import Store from "../app/Store";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment By Amount</button>
    </div>
  );
};

export default Counter;
