import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducers from "./reducers/todo"
import userReducers from "./reducers/user"

const reducers = combineReducers({
  todo: todoReducers,
  user: userReducers
})

export const store = configureStore ({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch