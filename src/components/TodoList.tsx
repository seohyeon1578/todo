import React from "react";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook
} from "react-redux";

import { selectTodos, toggleItem } from "../store/reducers/todo";
import { RootState } from "../store/store";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const TodoList = () => {
  const todos = useTypeSelector(selectTodos);
  const dispatch = useDispatch();

  return(
    <ul>
      {todos.map(({ id, text, isDone }, index: number) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => dispatch(toggleItem(id))}
          />
          {text}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;