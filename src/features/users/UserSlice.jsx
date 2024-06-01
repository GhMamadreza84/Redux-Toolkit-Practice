import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchUsers",()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
})

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder)=>{

  }
});
