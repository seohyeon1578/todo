import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/userAction";

const initialState = {
  loading: "",
  accessToken: "",
  isLoggedIn: false,
  error: {}
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = ""
      state.isLoggedIn = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = "success"
        state.accessToken = payload.access_token
        state.isLoggedIn = true
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = "failed"
        if(payload) state.error = payload
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = "success"
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = "failed"
        if(payload) state.error = payload
      })
  }
}) 

export default userSlice.reducer