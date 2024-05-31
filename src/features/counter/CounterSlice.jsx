import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counterValue: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counterValue++;
    },
    decrement: (state, action) => {
      state.counterValue--;
    },
    incrementByAmount: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export default CounterSlice.reducer;
export const { increment, decrement ,incrementByAmount} = CounterSlice.actions;
export const selectCounter = (Store) => Store.counter.counterValue;
