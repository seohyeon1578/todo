import axios, { AxiosError } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IAuth } from "../../interfaces/Auth"

interface KnowError {
  message: string
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async({email, password}: IAuth, {rejectWithValue}) => {
    try{
      const { data } = await axios.post('http://localhost:5001/auth/login',
      {
        email,
        password
      })

      return data;
    } catch (err) {
      const error: AxiosError<KnowError> = err as any
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/regiser',
  async({email, username, password}: IAuth, {rejectWithValue}) => {
    try{
      await axios.post('http://localhost:5001/auth/register',
      {
        email,
        username,
        password
      })
    } catch (err) {
      const error: AxiosError<KnowError> = err as any
      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data)
    }
  }
)