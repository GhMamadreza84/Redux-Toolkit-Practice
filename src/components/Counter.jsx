import { useSelector } from "react-redux";
// import Store from "../app/Store";
const counter = useSelector((store) => store.counter.counterValu);
const Counter = () => {
  return <div>Counter is {counter}</div>;
};

export default Counter;
