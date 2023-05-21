import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAuth } from "../../interfaces/Auth"

export const loginUser = createAsyncThunk(
  'auth/login',
  async({id, password}: IAuth, {rejectWithValue}) => {
    try{
      await axios.post('http://localhost:5000/api/user/login',
      {
        id,
        password
      })
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error)
      }
    }
  }
)