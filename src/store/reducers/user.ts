import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/userAction";

const initialState = {
  loading: "",
  isLogin: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = "success"
        state.isLogin = true
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = "failed"
      })
  }
}) 

export default userSlice.reducer