import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/number/NumberSlice";

const Number = () => {
  const number = useSelector((state) => state.number.numberValue);
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

export default Number;
