import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CounterReducer from "../features/counter/CounterSlice";
import NumberReducer from "../features/number/NumberSlice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    number: NumberReducer,
  },
  middleware: (getDefualtMiddleWare) => getDefualtMiddleWare().concat(logger)
});

export default Store;
