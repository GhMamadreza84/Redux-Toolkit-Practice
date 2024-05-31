import { useSelector } from "react-redux";
import Store from "../app/Store";
const Counter = () => {
  const counter = useSelector(Store=>Store.counter.counterValue);
  return <div>Counter is {counter}</div>;
};

export default Counter;
