import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers/todo"

export const store = configureStore ({
  reducer: {
    todo: todoReducers
  }
});

export type RootState = ReturnType<typeof store.getState>