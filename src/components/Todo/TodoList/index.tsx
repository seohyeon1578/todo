import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import { changeEdit, currentDateTodos, deleteItem, selectTodos, toggleItem, updateItem } from "../../../store/reducers/todo";

import OptionIcon from "../../../assets/imgs/option_icon.png";
import * as L from "./TodoList.style";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Modal from "../../Modal";

const TodoList = () => {
  const [open, setOpen] = useState(false);
  const [modalId, setId] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  
  const todos = useAppSelector(selectTodos);
  const currentDate = useAppSelector(currentDateTodos);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpen(props => !props);
  }

  const handleOpen = (id: string, title: string) => {
    handleClose();
    setId(id);
    setModalTitle(title);
  }

  const handleDelete = () => {
    dispatch(deleteItem(modalId));
    handleClose();
  }

  const handleUpdate = () => {
    handleClose();
    dispatch(changeEdit(modalId));
  }
  
  const handleUpdateItem = () => {
    dispatch(changeEdit(modalId));
    dispatch(updateItem({ id: modalId, title: modalTitle }))
  }

  const pressEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      handleUpdateItem();
    }
  }

  return(
    <L.Container>
      <ul>
        {todos.map(({ id, title, date, isDone, isEdit }) => {
          if(date === currentDate) {
            return(
              <li key={id}>
                <L.CheckBox
                  type="checkbox"
                  id={id}
                  checked={isDone}
                  onChange={() => dispatch(toggleItem(id))}
                />
                <L.CheckBoxLabel htmlFor={id}>
                  {isEdit 
                    ? <L.Input
                        onChange={(e) => setModalTitle(e.target.value)}
                        onKeyDown={pressEnterKey}
                        defaultValue={title}
                      />
                    : <span>{title}</span>
                  }
                </L.CheckBoxLabel>
                <L.OptionBtn onClick={() => handleOpen(id, title)}><img src={OptionIcon} alt="옵션"/></L.OptionBtn>
              </li>
        )}})}
      </ul>
      <Modal 
        open={open} 
        onClose={handleClose}
      >
        <L.todoModal>
          <h4>{modalTitle}</h4>
          <div>
            <button onClick={() => handleUpdate()}>수정하기</button>
            <button onClick={() => handleDelete()}>삭제하기</button>
          </div>
        </L.todoModal>
      </Modal>
    </L.Container>
  )
}

export default TodoList;