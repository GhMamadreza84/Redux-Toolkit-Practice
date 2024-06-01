import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {},
});
