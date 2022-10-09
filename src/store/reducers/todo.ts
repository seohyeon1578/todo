import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoList, TodoId } from './../../interfaces/Todo/index';

const initialState: TodoList = {
  list: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state: TodoList, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    toggleItem: (state, action: PayloadAction<TodoId>) => {
      const index = state.list.findIndex(({ id }) => id === action.payload)

      if(index) {
        state.list[index].isDone = !state.list[index].isDone;
      }
    }
  }
});

export const { addItem, toggleItem } = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: RootState) => state.todo.list
