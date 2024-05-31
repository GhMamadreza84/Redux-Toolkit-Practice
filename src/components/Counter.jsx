import { useSelector } from "react-redux";
import { selectCounter } from "../features/CounterSlice";

import Store from "../app/Store";
const Counter = () => {
  const counter = useSelector(selectCounter);
  return <div>Counter is {counter}</div>;
};

export default Counter;
