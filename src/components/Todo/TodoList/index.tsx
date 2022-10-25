import React from "react";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook
} from "react-redux";

import { selectTodos, toggleItem } from "../../../store/reducers/todo";
import { RootState } from "../../../store/store";

import OptionIcon from "../../../assets/imgs/option_icon.png";
import * as L from "./TodoList.style";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

const TodoList = () => {
  const todos = useTypeSelector(selectTodos);
  const dispatch = useDispatch();
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