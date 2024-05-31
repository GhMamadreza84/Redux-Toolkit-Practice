import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "../features/counter/CounterSlice";
import NumberReducer from "../features/number/NumberSlice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    number: NumberReducer,
  },
});

export default Store;
