import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberValue: 5,
};

const numberSlice = createSlice({
  name: number,
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++;
    },
    decrement: (state) => {
      state.numberValue--;
    },
  },
});
