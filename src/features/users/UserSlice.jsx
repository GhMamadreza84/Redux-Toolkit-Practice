import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {},
});
