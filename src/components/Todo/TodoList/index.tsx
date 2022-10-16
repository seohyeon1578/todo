import React from "react";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook
} from "react-redux";

import * as L from "./TodoList.style";

import { selectTodos, toggleItem } from "../../../store/reducers/todo";
import { RootState } from "../../../store/store";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const TodoList = () => {
  const todos = useTypeSelector(selectTodos);
  const dispatch = useDispatch();

  return(
    <L.Container>
      <ul>
        {todos.map(({ id, text, isDone }, index: number) => (
          <li key={index}>
            <L.CheckBox
              type="checkbox"
              id="isDone"
              checked={isDone}
              onChange={() => dispatch(toggleItem(id))}
            />
            <L.CheckBoxLabel htmlFor="isDone"><span>{text}</span></L.CheckBoxLabel>
          </li>
        ))}
      </ul>
    </L.Container>
  )
}

export default TodoList;