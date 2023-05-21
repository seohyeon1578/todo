import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers/todo"
import userReducers from "./reducers/user"

export const store = configureStore ({
  reducer: {
    todo: todoReducers,
    user: userReducers,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch