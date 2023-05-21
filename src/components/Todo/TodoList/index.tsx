import React from "react";

import { selectTodos, toggleItem } from "../../../store/reducers/todo";

import OptionIcon from "../../../assets/imgs/option_icon.png";
import * as L from "./TodoList.style";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  return(
    <L.Container>
      <ul>
        {todos.map(({ id, text, isDone }) => (
          <li key={id}>
            <L.CheckBox
              type="checkbox"
              id={id}
              checked={isDone}
              onChange={() => dispatch(toggleItem(id))}
            />
            <L.CheckBoxLabel htmlFor={id}><span>{text}</span></L.CheckBoxLabel>
            <L.OptionBtn><img src={OptionIcon} alt="옵션"/></L.OptionBtn>
          </li>
        ))}
      </ul>
    </L.Container>
  )
}

export default TodoList;