import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState, TodoId } from './../../interfaces/Todo/index';
import dayjs from 'dayjs';

const now = dayjs();

const initialState: TodoState = {
  list: [],
  currentDate: now.format(),
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state: TodoState, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    deleteItem: (state: TodoState, action: PayloadAction<TodoId>) => {
      state.list = state.list.filter((value) => value.id !== action.payload)
    },
    updateItem: (state: TodoState, action: PayloadAction<Todo>) => {
      const { id, title } = action.payload;
      state.list = state.list.map((value) => 
        value.id === id 
        ? { ...value, title } 
        : value
      )
    },
    toggleItem: (state, action: PayloadAction<TodoId>) => {
      const index = state.list.findIndex(({ id }) => id === action.payload)

      if(index || index === 0) {
        state.list[index].isDone = !state.list[index].isDone;
      }
    },
    changeEdit: (state: TodoState, action: PayloadAction<TodoId>) => {
      state.list = state.list.map((value) => 
        value.id === action.payload
        ? { ...value, isEdit: !value.isEdit }
        : value
      )
    },
    changeDate: (state: TodoState, action: PayloadAction<string>) => {
      state.currentDate = action.payload
    }
  }
});

export const { 
  addItem, 
  toggleItem, 
  deleteItem, 
  updateItem,
  changeEdit, 
  changeDate 
} = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: RootState) => state.todo.list;
export const currentDateTodos = (state: RootState) => state.todo.currentDate;
